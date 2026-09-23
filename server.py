"""
MedZen Writes - Studio Local Server with Direct Disk Save API
Serves website files and handles POST /api/save to directly write customizations to HTML files on disk.
"""

import http.server
import socketserver
import json
import os
import sys

PORT = 8000
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

class StudioRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=BASE_DIR, **kwargs)

    def end_headers(self):
        # Allow CORS and prevent caching completely for live development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Request-Private-Network, Access-Control-Request-Headers, *')
        self.send_header('Access-Control-Allow-Private-Network', 'true')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        if self.path == '/api/status':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({
                'status': 'online',
                'version': '2.4',
                'base_dir': BASE_DIR,
                'message': 'MedZen Studio Disk Server is active and saving to disk.'
            }).encode('utf-8'))
            return
        super().do_GET()

    def do_POST(self):
        if self.path == '/api/status':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({
                'status': 'online',
                'version': '2.4',
                'base_dir': BASE_DIR,
                'message': 'MedZen Studio Disk Server is active and saving to disk.'
            }).encode('utf-8'))
            return

        elif self.path == '/api/save':
            try:
                content_length = int(self.headers.get('Content-Length', 0))
                body = self.rfile.read(content_length).decode('utf-8')
                data = json.loads(body)
                
                rel_page = data.get('page', '').strip()
                html_content = data.get('html', '')
                
                if not rel_page or not html_content:
                    self.send_response(400)
                    self.send_header('Content-Type', 'application/json')
                    self.end_headers()
                    self.wfile.write(json.dumps({'success': False, 'error': 'Missing page or html content'}).encode('utf-8'))
                    return
                
                # Sanitize target path: must be inside BASE_DIR and must end with .html
                target_path = os.path.normpath(os.path.join(BASE_DIR, rel_page))
                if not target_path.startswith(BASE_DIR) or not target_path.endswith('.html'):
                    self.send_response(400)
                    self.send_header('Content-Type', 'application/json')
                    self.end_headers()
                    self.wfile.write(json.dumps({'success': False, 'error': 'Invalid target path'}).encode('utf-8'))
                    return
                
                # Write to disk and flush
                with open(target_path, 'w', encoding='utf-8') as f:
                    f.write(html_content)
                    f.flush()
                    os.fsync(f.fileno())
                
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({
                    'success': True, 
                    'file': rel_page, 
                    'message': f'Changes successfully saved directly to {rel_page} on disk!'
                }).encode('utf-8'))
                print(f"[Studio Live Server] Saved changes directly to disk: {rel_page}")

            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'success': False, 'error': str(e)}).encode('utf-8'))

        elif self.path == '/api/upload-photo':
            try:
                import base64, time, re
                content_length = int(self.headers.get('Content-Length', 0))
                body = self.rfile.read(content_length).decode('utf-8')
                data = json.loads(body)

                raw_filename = data.get('filename', 'uploaded_photo.jpg')
                safe_name = re.sub(r'[^a-zA-Z0-9_\-\.]', '_', raw_filename)
                if not safe_name.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
                    safe_name += '.jpg'

                base_name, ext = os.path.splitext(safe_name)
                final_name = f"{base_name}_{int(time.time())}{ext}"

                images_dir = os.path.join(BASE_DIR, 'assets', 'images')
                os.makedirs(images_dir, exist_ok=True)
                target_path = os.path.join(images_dir, final_name)

                file_data = data.get('data', '')
                if ',' in file_data:
                    file_data = file_data.split(',', 1)[1]

                # Correctly decode base64 binary data
                binary_data = base64.b64decode(file_data)

                prepare_card = data.get('prepare_card', False) or any(k in raw_filename.lower() for k in ['pub', 'paper', 'screenshot'])
                if prepare_card:
                    try:
                        import io
                        from PIL import Image, ImageChops
                        img = Image.open(io.BytesIO(binary_data)).convert('RGB')
                        bg = Image.new('RGB', img.size, (255, 255, 255))
                        diff = ImageChops.difference(img, bg)
                        bbox = diff.getbbox()
                        content = img.crop(bbox) if bbox else img
                        
                        target_w = 1200
                        target_h = 828
                        pad_x = 60
                        pad_y = 55
                        avail_w = target_w - (pad_x * 2)
                        avail_h = target_h - (pad_y * 2)
                        
                        cw, ch = content.size
                        scale = min(avail_w / cw, avail_h / ch)
                        new_w = int(cw * scale)
                        new_h = int(ch * scale)
                        resized_content = content.resize((new_w, new_h), Image.Resampling.LANCZOS)
                        
                        canvas = Image.new('RGB', (target_w, target_h), (255, 255, 255))
                        pos_x = (target_w - new_w) // 2
                        pos_y = (target_h - new_h) // 2
                        canvas.paste(resized_content, (pos_x, pos_y))
                        
                        # Save prepared image
                        target_path_png = os.path.splitext(target_path)[0] + '.png'
                        canvas.save(target_path_png, 'PNG', quality=95)
                        final_name = os.path.basename(target_path_png)
                        print(f"[Studio Live Server] Cleanly prepared card image saved to disk: {target_path_png}")
                    except Exception as pe:
                        print(f"[Studio Live Server] PIL prepare fallback: {pe}")
                        with open(target_path, 'wb') as f:
                            f.write(binary_data)
                            f.flush()
                else:
                    with open(target_path, 'wb') as f:
                        f.write(binary_data)
                        f.flush()

                rel_url = f"assets/images/{final_name}"
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({
                    'success': True,
                    'filename': final_name,
                    'url': rel_url,
                    'message': f'Photo saved & prepared to {rel_url} on disk!'
                }).encode('utf-8'))
                print(f"[Studio Live Server] Saved uploaded photo to: {rel_url}")

            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'success': False, 'error': str(e)}).encode('utf-8'))
        else:
            self.send_response(404)
            self.end_headers()

def run_server():
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), StudioRequestHandler) as httpd:
        print(f"[Studio Live Server] Serving at http://localhost:{PORT}")
        print(f"[Studio Live Server] Direct disk save enabled at http://localhost:{PORT}/api/save")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server.")
            httpd.shutdown()

if __name__ == '__main__':
    run_server()
