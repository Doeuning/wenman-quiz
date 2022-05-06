<template>
  <div class="result">
    <h1 class="txt">당신의 웬만덕후 레벨은????</h1>
    <div class="tit jua">"{{ result }}"</div>
    <h2 class="score">총점 {{ total }}점 입니다.</h2>
    <div class="btn-wrap">
      <button class="btn-replay" @click="replay">억울하면 다시하기</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "result-page",
  computed: {
    ...mapState(["score"]),
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
  },
};
</script>

<style scoped lang="scss">
.result {
  text-align: center;
}
.txt {
  margin-bottom: 50px;
  font-weight: 700;
  font-size: 26px;
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
