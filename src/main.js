import { createApp } from 'vue'
import './style.css'
import 'vant/lib/index.css'
import vant from 'vant'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.use(vant)
app.mount('#app')
