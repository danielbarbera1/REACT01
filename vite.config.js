import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/REACT01/',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist', // Asegura que el directorio de salida sea "dist"
  },
  // Nota: no configurar ESLint directamente en Vite sin plugin; usa un plugin si lo necesitas
  server: {
    host: true,
    port: 3000,
  },
})
