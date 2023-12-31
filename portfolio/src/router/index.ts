import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../pages/Home.vue"),
    },
    {
      path: "/themen",
      name: "themen",
      component: () => import("../pages/Themen.vue"),
    },
    {
      path: "/barrierearten",
      name: "barrierearten",
      component: () => import("../pages/Barrierearten.vue"),
    },
    {
      path: "/gesetzlich",
      name: "gesetzlich",
      component: () => import("../pages/Gesetzlich.vue"),
    },
    {
      path: "/farben",
      name: "farben",
      component: () => import("../pages/Farben.vue"),
    },
    {
      path: "/semantischesHtml",
      name: "semHtml",
      component: () => import("../pages/SemHtml.vue"),
    },
    {
      path: "/aria",
      name: "aria",
      component: () => import("../pages/Aria.vue"),
    },
    {
      path: "/typografie",
      name: "typografie",
      component: () => import("../pages/Typografie.vue"),
    },
    {
      path: "/formulare",
      name: "formulare",
      component: () => import("../pages/Formulare.vue"),
    },
    {
      path: "/alternativtexte",
      name: "altTexts",
      component: () => import("../pages/AltTexte.vue"),
    },
    {
      path: "/sprache",
      name: "sprache",
      component: () => import("../pages/Sprache.vue"),
    },
    {
      path: "/wcaganalyse",
      name: "wcag",
      component: () => import("../pages/WCAG.vue"),
    },
  ],
});

export default router;
