import { createRouter, createWebHashHistory } from "vue-router";
import StoreView from "../views/StoreView.vue";
import TestView from "../views/TestView.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: {
        path: "/store",
      },
    },
    {
      path: "/store",
      component: StoreView,
    },
    {
      path: "/test",
      component: TestView,
    },
  ],
});

export default router;
