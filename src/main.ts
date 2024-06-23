import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/styles/style.css';

import router from '@/router.ts'
import { pinia } from "@/plugins/pinia.ts";

createApp(App)
  .use(router)
  .use(pinia)
  .mount('#app')
