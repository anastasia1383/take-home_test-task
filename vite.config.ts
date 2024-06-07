import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    base: '/take-home_test-task/',
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/index.scss";`,
        },
      },
    },
  };
});
