<template>
  <div class="result">
    <h1 class="txt">{{ $store.state.userName }}님의 웬만덕후 레벨은????</h1>
    <div class="img-box">
      <img src="@/assets/images/level.jpg" alt="" />
      <span class="user">{{ $store.state.userName }}</span>
    </div>
    <div class="tit jua">"{{ result }}"</div>
    <h2 class="score">총점 {{ total }}점 입니다.</h2>
    <div class="btn-wrap">
      <button class="btn-replay" @click="replay">억울하면 다시하기</button>
      <button class="btn-share" type="button" @click="copyUrl">
        URL 복사하기
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "result-page",
  computed: {
    ...mapState(["score", "userName", "userAge"]),
  },
  mounted() {
    if (this.total >= 90) {
      this.result = "열라짱"; // 18문제
    } else if (this.total >= 75 && this.total < 90) {
      this.result = "짱"; // 15문제
    } else if (this.total >= 50 && this.total < 75) {
      this.result = "붕"; // 10문제
    } else if (this.total >= 35 && this.total < 50) {
      this.result = "열라붕"; // 7문제
    } else {
      this.result = "열라붕신";
    }
  },
  data() {
    return {
      result: "",
      total: this.$store.state.score,
    };
  },
  methods: {
    ...mapMutations(["MU_CHANGE_SCORE"]),
    replay() {
      this.$router.push("/");
      this.$store.commit("MU_RESET_SCORE");
    },
    copyUrl() {
      const dummy = document.createElement("input");
      const text = location.href;

      document.body.appendChild(dummy);
      dummy.value = text;
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
      alert("URL을 복사했습니다.");
    },
  },
};
</script>

<style scoped lang="scss">
.result {
  text-align: center;
}
.txt {
  font-weight: 700;
  font-size: 26px;
}
.img-box {
  position: relative;
  margin: 25px auto;
  .user {
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    color: #fff;
    z-index: 20;
  }
}
.tit {
  font-size: 50px;
}
.score {
  margin-top: 10px;
  font-size: 18px;
}
.btn-wrap {
  justify-content: center;
}
</style>
