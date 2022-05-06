import Vue from "vue";
import VueRouter from "vue-router";
import etc from "./modules/etc"; // 공통
import { pages } from "@/utils/path";
import store from "@/store";

Vue.use(VueRouter);

let routes = [
  {
    path: "/",
    name: "home-page",
    component: pages("home"),
    meta: { title: "home", layout: "Default" },
  },
  {
    path: "/quiz",
    name: "quiz-page",
    component: pages("quiz"),
    meta: { title: "quiz", layout: "Default" },
  },
  {
    path: "/result",
    name: "result-page",
    component: pages("result"),
    meta: { title: "result", layout: "Default" },
  },
  ...etc,
];

routes.forEach((el) => {
  if (el.meta === undefined) el.meta = {};
  if (el.meta.layout === undefined) el.meta.layout = "Default";
});

// if (process.env.VUE_APP_DEBUG === "Y") {
//   routes = [...guide, ...routes];
// }
//
// const scrollBehavior = (to, from, savedPosition) => {
//   if (to.path === from.path) {
//     return null;
//   }
//   const tabList = store.state.headerTab.HEADER_TAB_LIST;
//   const tabIndex = tabList.findIndex((obj) => obj.path === to.path);
//   if (tabIndex !== -1 && tabList[tabIndex].scrollTo) {
//     tabList[tabIndex].scrollTo = false;
//     return { x: 0, y: tabList[tabIndex].scrollPosition };
//   }
//   if (savedPosition) {
//     return savedPosition;
//   } else {
//     return { x: 0, y: 0 };
//   }
// };

store.commit("GET_DEVICE_TYPE");
const router = new VueRouter({
  mode: "history",
  // scrollBehavior,
  base: "/",
  routes,
});

// 같은 페이지에서 같은 페이지로 $router.push 한 오률를 처리함
// const originalPush = VueRouter.prototype.push;
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch((err) => {
//     if (err.name !== 'NavigationDuplicated') throw err;
//   });
// };

// router.beforeEach(async (to, from, next) => {});

export default router;
