import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/ordena",
    name: "Ordena",
    component: () => import(/* webpackChunkName: "List" */ "../views/Ordena.vue"),
  },
  {
    path: "/interlace",
    name: "Interlace",
    component: () => import(/* webpackChunkName: "List" */ "../views/Interlace.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
