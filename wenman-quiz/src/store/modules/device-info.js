// import router from '@/router';

export default {
  namespaced: true,
  state: {
    DEVICE_INFO: null,
    /*DEVICE_INFO: {
      deviceInfo: {
        appVer: '1.1.1',
        uuid: 'uuid-uuid-uuid-uuid',
        appMrkgUnqNo: 'app marketing unique number',
        appPushKeyVal: 'app push key data',
        mdelNm: 'SM-N981N',
        osCd: 'CUS00601',
        osVer: 11,
        instlDtm: '2021.12.03 12:00:00',
      },
    },*/
  },
  getters: {
    DEViCE_CODE(state) {
      // (웹: CUS00503, 앱: CUS00504)
      return {
        lginDvCd: state.DEVICE_INFO ? "CUS00504" : "CUS00503",
      };
    },
  },
  mutations: {
    MU_DEVICE_INFO: (state, payload) => {
      state.DEVICE_INFO = payload;
    },
  },
  actions: {
    async AC_DEVICE_INFO({ commit }) {
      console.log(commit);
      // todo 디바이스 정보 브릿지로 받아오기
      // commit('MU_DEVICE_INFO', await '브릿지 함수');
    },
  },
};
