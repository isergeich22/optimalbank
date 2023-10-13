import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import envPlugin from 'vite-plugin-env';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    envPlugin({
      dotenv: true,
      systemvars: true,
    }),
  ],
});
import { defineConfig } from 'vite';
