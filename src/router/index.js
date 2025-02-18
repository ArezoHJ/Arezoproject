import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Weather from "../views/Weather.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/weather/:city", component: Weather, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
