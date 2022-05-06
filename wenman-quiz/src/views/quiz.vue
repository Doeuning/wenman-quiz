<template>
  <div v-if="this.quiz.length">
    <h1 class="tit">{{ currIdx + 1 }}. {{ quiz[currIdx].q }}</h1>
    <ul class="quiz">
      <li v-for="item in quiz[currIdx].a" :key="item.id">
        <form-radio
          :id="item.id"
          :inputName="quiz[currIdx].name"
          v-model="quiz[currIdx].choosed"
        >
          {{ item.txt }}
        </form-radio>
      </li>
    </ul>
    <div class="btn-wrap">
      <button type="button" class="btn-prev" @click="prevQuiz">
        이전 문제
      </button>
      <button
        type="button"
        class="btn-next"
        @click="nextQuiz"
        v-if="this.currIdx + 1 < this.quiz.length"
      >
        다음 문제
      </button>
      <router-link to="/result" class="btn-next" v-else>결과보기</router-link>
      <button type="button" class="btn-giveup" v-if="showGiveup">포기</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import formRadio from "@/components/form-radio";
import getQuiz from "@/assets/quiz.json";

export default {
  name: "quiz-page",
  components: {
    "form-radio": formRadio,
  },
  data() {
    return {
      quiz: [],
      currIdx: 0,
    };
  },
  created() {
    this.fetchQuiz();
  },
  mounted() {},
  computed: {
    ...mapState(["score"]),
    showGiveup() {
      if (this.currIdx > this.quiz.length / 2 && this.$store.score <= 30) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    ...mapMutations(["MU_CHANGE_SCORE"]),
    async fetchQuiz() {
      try {
        this.quiz = await getQuiz;
      } catch (e) {
        console.log(e);
      }
    },
    prevQuiz() {
      this.currIdx--;
    },
    nextQuiz() {
      console.log(this.currIdx, this.quiz.length);
      if (this.quiz[this.currIdx].choosed && this.currIdx < this.quiz.length) {
        if (
          this.quiz[this.currIdx].choosed === this.quiz[this.currIdx].answer
        ) {
          this.$store.commit("MU_CHANGE_SCORE");
        }
        this.currIdx++;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.tit {
  font-weight: 700;
  font-size: 24px;
}
.quiz {
  margin-top: 30px;
  li {
    & + li {
      margin-top: 15px;
    }
  }
}
</style>
