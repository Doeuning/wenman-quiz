import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import deviceInfo from "./modules/device-info";

export default new Vuex.Store({
  state: {
    mobileYn: false,
    userName: "",
    userAge: 0,
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
    MU_CHANGE_SCORE(state) {
      state.score += 5;
    },
    MU_RESET_SCORE(state) {
      state.score = 0;
    },
    GET_USER_INFO(state, payload) {
      state.userName = payload.name;
      state.userAge = payload.age;
    },
  },
  actions: {},
  modules: {
    deviceInfo,
  },
});
