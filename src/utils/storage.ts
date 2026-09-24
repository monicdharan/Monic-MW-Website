/**
 * Robust Multi-Tier Storage Engine for MedZen Writes Admin Dashboard
 * 1. Disk Backend API (persistedContent.json on hard drive)
 * 2. IndexedDB (browser database - 500MB+ permanent capacity)
 * 3. LocalStorage (fast cache)
 */

const DB_NAME = 'MedZenWritesAdminDB';
const DB_VERSION = 1;
const STORE_NAME = 'admin_state';
const LOCAL_STORAGE_PREFIX = 'medzen_admin_v4_';

// ----------------------------------------------------------------------------
// IndexedDB Engine
// ----------------------------------------------------------------------------
function openIndexedDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB not supported'));
      return;
    }
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function idbGet<T>(key: string): Promise<T | null> {
  try {
    const db = await openIndexedDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(key);
      req.onsuccess = () => resolve(req.result !== undefined ? req.result : null);
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn('[Storage] idbGet fallback error:', err);
    return null;
  }
}

export async function idbSet<T>(key: string, value: T): Promise<void> {
  try {
    const db = await openIndexedDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.put(value, key);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn('[Storage] idbSet error:', err);
  }
}

export async function idbClear(): Promise<void> {
  try {
    const db = await openIndexedDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.clear();
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn('[Storage] idbClear error:', err);
  }
}

// ----------------------------------------------------------------------------
// LocalStorage with error safety
// ----------------------------------------------------------------------------
export function localGet<T>(key: string, fallback: T): T {
  try {
    const item = localStorage.getItem(`${LOCAL_STORAGE_PREFIX}${key}`);
    return item ? JSON.parse(item) : fallback;
  } catch {
    return fallback;
  }
}

export function localSet<T>(key: string, value: T): void {
  try {
    localStorage.setItem(`${LOCAL_STORAGE_PREFIX}${key}`, JSON.stringify(value));
  } catch (e) {
    console.warn(`[Storage] LocalStorage quota exceeded or error for key ${key}:`, e);
  }
}

// ----------------------------------------------------------------------------
// Disk Persistence API (Vite Middleware & Server.py)
// ----------------------------------------------------------------------------
export async function saveStateToDisk(data: any): Promise<{ success: boolean; message: string; timestamp?: string }> {
  try {
    const res = await fetch('/api/save-state', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      const json = await res.json();
      return { success: true, message: json.message || 'Saved directly to disk', timestamp: json.timestamp };
    } else {
      return { success: false, message: `Server error: ${res.status}` };
    }
  } catch (err: any) {
    return { success: false, message: `Network or Server unreachable: ${err?.message || err}` };
  }
}

export async function loadStateFromDisk(): Promise<any | null> {
  try {
    const res = await fetch('/api/load-state', {
      method: 'GET',
      headers: { 'Cache-Control': 'no-cache' },
    });
    if (res.ok) {
      const data = await res.json();
      return data;
    }
    return null;
  } catch {
    return null;
  }
}

export async function uploadImageToDisk(fileData: string, filename: string): Promise<{ success: boolean; url?: string; error?: string }> {
  try {
    const res = await fetch('/api/upload-photo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: fileData, filename }),
    });
    if (res.ok) {
      const json = await res.json();
      return { success: true, url: json.url };
    }
    return { success: false, error: `Upload error (${res.status})` };
  } catch (err: any) {
    return { success: false, error: err?.message || 'Server upload failed' };
  }
}

// ----------------------------------------------------------------------------
// Backup Export & Import (JSON file download / restore)
// ----------------------------------------------------------------------------
export function exportStateAsJsonFile(state: any, filename = 'medzen-website-content-backup.json') {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
