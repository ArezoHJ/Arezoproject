import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persistedstate';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from './views/Home.vue';
import About from './views/About.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';


const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/weather/:city', component: Home }
  ];
  
const router = createRouter({
   history: createWebHistory(),
   routes,
});

const pinia = createPinia();
pinia.use(piniaPersist);

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount('#app');
 
  