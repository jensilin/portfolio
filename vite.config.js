import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
  // The repo lives on /mnt/c, where inotify does not fire for Windows-side edits.
  server: {
    watch: {
      usePolling: true,
      interval: 300,
    },
  },
})
