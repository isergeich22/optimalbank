import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import EnvironmentPlugin from 'vite-plugin-environment';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), EnvironmentPlugin('all', { prefix: 'REACT_APP_' })],
<<<<<<< HEAD
=======
  server: {
    proxy: {
      '/api': {
        target: 'http://195.93.252.223:8081/api/v1',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
>>>>>>> 68d96d558b76fa57731b7b7756f1ea7508ec2bc9
});
