import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { readdirSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));

/** Directories that never contain page entries. */
const IGNORED = new Set(['node_modules', 'dist', 'public', 'src', 'docs', '.git']);

/**
 * Multi-page discovery.
 *
 * Every `index.html` at the project root or one level below becomes a build
 * entry, and its folder name becomes the URL:
 *
 *   index.html            ->  /
 *   about/index.html      ->  /about/
 *   admissions/index.html ->  /admissions/
 *
 * Adding a page needs no config change — drop in the folder and its
 * matching `src/pages/<name>/main.jsx` entry.
 */
function discoverPages() {
  const entries = { main: resolve(root, 'index.html') };

  for (const dirent of readdirSync(root, { withFileTypes: true })) {
    if (!dirent.isDirectory() || IGNORED.has(dirent.name) || dirent.name.startsWith('.')) continue;

    const page = resolve(root, dirent.name, 'index.html');
    if (existsSync(page)) entries[dirent.name] = page;
  }

  return entries;
}

export default defineConfig({
  plugins: [react()],
  // Assets are referenced with absolute `/assets/...` paths across the CSS and
  // JSX, so the site must be served from the domain root.
  base: '/',
  publicDir: resolve(root, 'public'),
  resolve: {
    alias: { '@': resolve(root, 'src') },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: discoverPages(),
    },
  },
});
