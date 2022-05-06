<template>
  <div>
    <h1 class="txt">당신의 웬만덕후 레벨은????</h1>
    <div class="tit jua">"{{ result }}"</div>
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
    const score = this.$store.state.score;
    if (score >= 90) {
      this.result = "열라짱"; // 18문제
    } else if (score >= 75 && score < 90) {
      this.result = "짱"; // 15문제
    } else if (score >= 50 && score < 75) {
      this.result = "붕"; // 10문제
    } else if (score >= 35 && score < 50) {
      this.result = "열라붕"; // 7문제
    } else {
      this.result = "열라붕신";
    }
  },
  data() {
    return {
      result: "",
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
.txt {
  margin-bottom: 50px;
  font-weight: 700;
  font-size: 26px;
  text-align: center;
}
.tit {
  font-size: 50px;
  text-align: center;
}
.btn-wrap {
  justify-content: center;
}
</style>
