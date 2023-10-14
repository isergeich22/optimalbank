import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import EnvironmentPlugin from 'vite-plugin-environment';

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
=======
  server: {
    proxy: {
      '/api': {
        target: 'http://195.93.252.223:8081/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
>>>>>>> da88d912c41d2045e2dbdea5361ffcf40a602cc3
  plugins: [react(), EnvironmentPlugin('all', { prefix: 'REACT_APP_' })],
});
