import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from '@/plugins/axios'
import session from '@/plugins/session'
import store from './store'

createApp(App)
  .use(store)
  .use(axios)
  .use(session)
  .use(router)
  .mount('#app')
