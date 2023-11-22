import { createRouter, createWebHistory } from 'vue-router';
import HomeViews from "../views/HomeView.vue";
import VentasView from "../views/VentasView.vue";
import AboutUs from "../views/AboutUs.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import CreateUser from "../views/CreateUser.vue";
import CommentsView from "../views/Comments.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeViews,
    },
    {
      path: '/ventas',
      name: 'ventas',
      component: VentasView,
    },
    {
      path: '/aboutus',
      name: 'about-us',
      component: AboutUs,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/createuser',
      name: 'create-user',
      component: CreateUser,
    },
    {
      path: '/comments',
      name: 'comments',
      component: CommentsView,
    },
  ],
});

export default router;
