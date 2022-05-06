import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
// import vModal from "vue-js-modal";
// import PortalVue from "portal-vue";
// import Meta from "vue-meta";

// Vue.use(vModal);
// Vue.use(PortalVue);
// Vue.use(Meta, {
//   keyName: "metaInfo",
//   attribute: "data-vue-meta",
//   ssrAttribute: "data-vue-meta-server-rendered",
//   tagIDKeyName: "vmid",
//   refreshOnceOnNavigation: true,
// });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
