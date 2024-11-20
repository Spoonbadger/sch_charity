import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // This binds the server to all network interfaces
    port: process.env.PORT || 3000, // Default to 3000
  },
})