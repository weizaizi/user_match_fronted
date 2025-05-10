import { createApp } from 'vue'
import App from './App.vue'
import vant from 'vant'
import 'vant/lib/index.css'
import router from "./config/Routers"

const app = createApp(App)

app.use(vant)
app.use(router)

app.mount('#app')
