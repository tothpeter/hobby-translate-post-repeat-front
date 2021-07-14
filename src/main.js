import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueAxios from 'vue-axios'
import axios from '@/plugins/axios'
import session from '@/plugins/session'
import store from './store'

createApp(App)
  .use(store)
  .use(VueAxios, axios)
  .use(session)
  .use(router)
  .mount('#app')
