import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/styles/style.css';

import router from '@/router.ts'
import { pinia } from "@/plugins/pinia.ts";

import { register } from 'swiper/element/bundle';
register();

createApp(App)
  .use(router)
  .use(pinia)
  .mount('#app')
