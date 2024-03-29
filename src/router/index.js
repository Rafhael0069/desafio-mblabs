import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: { name: "design" },
  },
  {
    path: "/courses",
    name: "courses",
    component: () => import("../layouts/HomeLayout.vue"),
    children: [
      {
        path: "",
        redirect: { name: "design" },
      },
      {
        path: "design",
        name: "design",
        component: () => import("../pages/courses/DesignPage.vue"),
      },
      {
        path: "java",
        name: "java",
        component: () => import("../pages/courses/JavaPage.vue"),
      },
      {
        path: "marketing",
        name: "marketing",
        component: () => import("../pages/courses/MarketingPage.vue"),
      },
    ],
  },
  {
    path: "/parceiros",
    name: "parceiros",
    component: () => import("../layouts/HomeLayout.vue"),
    children: [
      {
        path: "",
        redirect: { name: "alura" },
      },
      {
        path: "alura",
        name: "alura",
        component: () => import("../pages/parceiros/AluraPage.vue"),
      },
      {
        path: "coursera",
        name: "coursera",
        component: () => import("../pages/parceiros/CourseraPage.vue"),
      },
      {
        path: "udemy",
        name: "udemy",
        component: () => import("../pages/parceiros/UdemyPage.vue"),
      },
    ],
  },
  {
    path: "/configuracoes",
    name: "configuracoes",
    component: () => import("../layouts/HomeLayout.vue"),
    children: [
      {
        path: "pesquisa",
        name: "pesquisa",
        component: () => import("../pages/configuracoes/ConfigPage.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
