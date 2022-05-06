<template>
  <div>
    <h1>결과 {{ $store.state.score }}</h1>
    <div class="btn-wrap">
      <button class="btn-replay" @click="replay">다시하기</button>
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
  methods: {
    ...mapMutations(["MU_CHANGE_SCORE"]),
    replay() {
      this.$router.push("/");
      this.$store.commit("MU_RESET_SCORE");
    },
  },
};
</script>

<style scoped></style>
