import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    // { path: "/", component: () => import("../views/LogIn.vue") },
    // { path: "/upload", component: () => import("../views/UploadPanel.vue") },
    { path: "/", component: () => import("../views/Inicio.vue") },
  ],
});

export default router;
