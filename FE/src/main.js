import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import App from './App.vue'
import router from './router'


// 引入 Font Awesome
import '@fortawesome/fontawesome-free/css/all.css'



const app = createApp(App)

app.use(router)

app.mount('#app')

