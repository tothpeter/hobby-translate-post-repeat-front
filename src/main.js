import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from '@/plugins/axios'
import session from '@/plugins/session'

createApp(App)
  .use(axios)
  .use(session)
  .use(router)
  .mount('#app')
