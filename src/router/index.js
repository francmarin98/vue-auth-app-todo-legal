import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../modules/auth/views/HomeView.vue";
import { AuthGuard } from "../modules/auth/guards/authGuard";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "home",
    },
    {
      path: "/home",
      name: "home",
      beforeEnter: [AuthGuard],
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../modules/auth/views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../modules/auth/views/RegisterView.vue"),
    },
  ],
});

export default router;
