import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio-react/', // This should match the repository name
  plugins: [react()]
});