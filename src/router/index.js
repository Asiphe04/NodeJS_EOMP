import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/products",
    name: "products",
    component: () => import("../views/ProductsView.vue"),
  },
  {
    path: "/products/:id",
    name: "product",
    component: () => import("../views/ProductView.vue"),
    props: true,
  },

  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/ContactView.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/AdminView.vue"),
  },
  {
    path: "/admin/edit/:id",
    name: "admin edit",
    component: () => import("../views/ProdEdit.vue"),
    props: true,
  },
  {
    path: "/user/edit/:id",
    name: "user edit",
    component: () => import("../views/UserEdit.vue"),
    props: true,
  },
  {
    path: "/admin/add",
    name: "adminAdd",
    component: () => import("../views/ProdAddView.vue"),
  },
  {
    path: "/users/add",
    name: "userAdd",
    component: () => import("../views/UserAdd.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
