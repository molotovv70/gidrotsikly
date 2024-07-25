import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith('swiper-')
      }
    }
  })],
  resolve: {
    alias: {
      '@': '/src',
      '@fonts': '/src/assets/fonts',
      '@images': '/src/assets/images',
      '@stores': '/src/stores',
      '@hooks': '/src/hooks',
    }
  }
})
