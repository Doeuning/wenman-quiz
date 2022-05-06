/* 공통 */
import { pages } from "@/utils/path";

export default [
  {
    path: "/404",
    component: pages("etc/404.vue"),
    meta: { title: "404", layout: "Clean", unauthorized: true },
  },
  {
    path: "*",
    component: pages("etc/404.vue"),
    meta: { title: "404", layout: "Clean", unauthorized: true },
  },
];
