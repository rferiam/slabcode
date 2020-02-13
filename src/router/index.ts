import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/render/:config",
    component: Home,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

const path = localStorage.getItem("path");
if (path) {
  localStorage.removeItem("path");
  router.push(path);
}

export default router;
