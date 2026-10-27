import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
import './style.css'
import 'vant/lib/index.css'
import vant from 'vant'
import App from './App.vue'
import router from './router'
const pinia = createPinia()
pinia.use(piniaPluginPersist)

const app = createApp(App)
app.use(router)
app.use(vant)
app.use(pinia)
app.mount('#app')
