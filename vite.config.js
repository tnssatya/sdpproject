import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // allow the sandbox preview host(s) used by Codesandbox and similar services
    host: true,
    port: 5173,
    strictPort: false,
    // allow the specific preview host and the .csb.app wildcard
    allowedHosts: [
      'hj2pxm-5173.csb.app',
      '.csb.app',
      'localhost'
    ],
    // use secure websocket (some sandboxes proxy via wss)
    hmr: {
      protocol: 'wss'
    }
  }
})
