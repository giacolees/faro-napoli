import {defineConfig} from 'vite';

export default defineConfig({
  base: './',
  publicDir: 'web-public',
  server: {port: 5173},
  build: {outDir: 'dist'},
});
