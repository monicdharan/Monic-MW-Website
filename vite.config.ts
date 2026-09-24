import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';

function adminDiskPersistencePlugin(): Plugin {
  return {
    name: 'admin-disk-persistence',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url?.split('?')[0];

        // 1. SAVE COMPLETE STATE TO DISK
        if (url === '/api/save-state' && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', () => {
            try {
              const data = JSON.parse(body);
              const dataDir = path.resolve(__dirname, 'src/data');
              const publicDataDir = path.resolve(__dirname, 'public/data');

              if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
              if (!fs.existsSync(publicDataDir)) fs.mkdirSync(publicDataDir, { recursive: true });

              const targetPath1 = path.join(dataDir, 'persistedContent.json');
              const targetPath2 = path.join(publicDataDir, 'persistedContent.json');

              const jsonString = JSON.stringify(data, null, 2);
              fs.writeFileSync(targetPath1, jsonString, 'utf-8');
              fs.writeFileSync(targetPath2, jsonString, 'utf-8');

              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({
                success: true,
                message: 'All changes successfully saved permanently to disk!',
                timestamp: new Date().toISOString(),
                filePaths: [targetPath1, targetPath2]
              }));
              console.log(`[Disk Storage API] Saved admin state to disk at ${new Date().toLocaleTimeString()}`);
            } catch (err: any) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, error: err.message }));
            }
          });
          return;
        }

        // 2. LOAD COMPLETE STATE FROM DISK
        if (url === '/api/load-state' && req.method === 'GET') {
          try {
            const dataPath = path.resolve(__dirname, 'src/data/persistedContent.json');
            if (fs.existsSync(dataPath)) {
              const raw = fs.readFileSync(dataPath, 'utf-8');
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.setHeader('Cache-Control', 'no-cache');
              res.end(raw);
              return;
            } else {
              res.statusCode = 404;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ exists: false, message: 'No persisted file yet' }));
              return;
            }
          } catch (err: any) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: false, error: err.message }));
            return;
          }
        }

        // 3. UPLOAD AND SAVE IMAGES DIRECTLY TO DISK
        if (url === '/api/upload-photo' && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', () => {
            try {
              const data = JSON.parse(body);
              const rawFilename = data.filename || 'uploaded_image.jpg';
              const safeName = rawFilename.replace(/[^a-zA-Z0-9_\-\.]/g, '_');
              const ext = path.extname(safeName) || '.jpg';
              const base = path.basename(safeName, ext);
              const finalName = `${base}_${Date.now()}${ext}`;

              const imagesDir = path.resolve(__dirname, 'public/assets/images');
              const altImagesDir = path.resolve(__dirname, 'assets/images');

              if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });
              if (!fs.existsSync(altImagesDir)) fs.mkdirSync(altImagesDir, { recursive: true });

              let fileData = data.data || '';
              if (fileData.includes(',')) {
                fileData = fileData.split(',')[1];
              }

              const buffer = Buffer.from(fileData, 'base64');
              fs.writeFileSync(path.join(imagesDir, finalName), buffer);
              fs.writeFileSync(path.join(altImagesDir, finalName), buffer);

              const relUrl = `/assets/images/${finalName}`;
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({
                success: true,
                filename: finalName,
                url: relUrl,
                message: `Image saved to ${relUrl} on disk!`
              }));
              console.log(`[Disk Storage API] Image saved: ${relUrl}`);
            } catch (err: any) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, error: err.message }));
            }
          });
          return;
        }

        next();
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), adminDiskPersistencePlugin()],
  server: {
    host: true,
    port: 3000,
    open: false,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  }
});
