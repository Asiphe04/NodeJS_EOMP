import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import( '../views/ProductsView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import( '../views/ContactView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import( '../views/AdminView.vue')
  },
  {
    path: "/admin/edit/:id",
    name: "adminEdit",
    component: () => import("../views/AdminEdit.vue"),
    props: true,
  },
  {
    path: '/admin/add',
    name: 'adminAdd',
    component: () => import('../views/AdminAdd.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
