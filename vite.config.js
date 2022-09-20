import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    manifest: true,
    outDir: 'dist',
    rollupOptions: {
      input: '/src/index.js',
    },
  },
  server: {
    port: 5173,
    https: false,
  },
});
