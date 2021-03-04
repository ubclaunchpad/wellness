import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import CreateEventPage from "./event/views/CreateEventPage.vue";
import EventPage from "./event/views/EventPage.vue";
import RegistrationPage from "./user/views/RegistrationPage.vue";
import LoginPage from "./user/views/Login.vue";
import UserDashboard from "./user/views/UserDashboard.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: CreateEventPage
  },
  {
    path: "/event",
    component: EventPage
  },
  {
    path: "/register",
    component: RegistrationPage
  },
  {
    path: "/login",
    component: LoginPage
  },
  {
    path: "/dashboard",
    component: UserDashboard
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
