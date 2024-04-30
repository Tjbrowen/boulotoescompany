import { defineConfig } from 'vite'; // Import defineConfig from vite
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Other build options...
    rollupOptions: {
      // Other Rollup options...
      external: ['express-async-handler']
    }
  }
});

