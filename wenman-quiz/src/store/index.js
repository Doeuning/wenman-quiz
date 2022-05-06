import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import deviceInfo from "./modules/device-info";

export default new Vuex.Store({
  state: {
    mobileYn: false,
    score: 0,
  },
  mutations: {
    GET_DEVICE_TYPE(state) {
      const ua = navigator.userAgent;
      if (/(tablet|ipad)|(android(?!.*mobi))/i.test(ua)) {
        state.mobileYn = false;
        return;
      }
      if (
        /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
          ua
        )
      ) {
        state.mobileYn = true;
        return;
      }
      state.mobileYn = false;
    },
    MU_TABLET_TYPE(state) {
      const userAgent = navigator.userAgent.toLowerCase();
      const isTablet =
        /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
          userAgent
        );
      console.log(isTablet);
      if (isTablet) {
        state.tabletYn = true;
        return;
      } else {
        state.tabletYn = false;
      }
    },
    MU_CAN_LEAVE_SITE(state, payload) {
      state.canLeaveSite = payload;
    },
    MU_CHANGE_SCORE(state) {
      state.score += 5;
    },
  },
  actions: {},
  modules: {
    deviceInfo,
  },
});
