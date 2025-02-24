import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/Home.vue";
import WeatherPage from "../views/Weather.vue";


const routes = [
  { path: "/", component: HomePage },
  { path: "/weather", component: WeatherPage, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
