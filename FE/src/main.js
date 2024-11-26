import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import App from './App.vue'
import store from "./store";
import router from './router'


// 引入 Font Awesome
import '@fortawesome/fontawesome-free/css/all.css'



const app = createApp(App)

// 確保在應用啟動時從 LocalStorage 同步狀態
if (localStorage.getItem("isAuthenticated") === "true") {
    store.commit("login", JSON.parse(localStorage.getItem("user")));
  }
app.use(store);
app.use(router)

app.mount('#app')

