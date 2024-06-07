import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const base = mode === 'production' ? '/take-home_test-task/' : '/';

  return {
    plugins: [react()],
    base,
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/index.scss";`,
        },
      },
    },
  };
});
