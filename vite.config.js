import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8000, // You can fix it to 3000 if needed
    open: true,
    host: true,
  }
});
