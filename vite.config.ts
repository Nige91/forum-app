import { defineConfig } from 'vite'
import dotenv from 'dotenv';
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 8000,
    watch: {
      usePolling: true
    }
  },
  define:{
    'process.env': dotenv.config({
      path: `.env`,
    }).parsed
  }
})
