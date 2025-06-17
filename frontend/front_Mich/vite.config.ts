import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/

/**aqui  vamos a importar lo de tailwind que son estilos, por que so webon */
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
