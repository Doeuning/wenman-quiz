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
        <template v-if="this.currIdx !== 0"> 이전 문제 </template>
        <template v-else> 자신없다... 처음으로 </template>
      </button>
      <button
        type="button"
        class="btn-giveup"
        v-if="showGiveup || currIdx === 5"
        @click="$router.push('/')"
      >
        포기
      </button>
      <button type="button" class="btn-next" @click="nextQuiz">
        <template v-if="this.currIdx + 1 < this.quiz.length">
          다음 문제
        </template>
        <template v-else>결과보기</template>
      </button>
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
  mounted() {
    this.fetchQuiz();
  },
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
      const newQuiz = getQuiz;
      this.quiz = [];
      try {
        this.quiz = await JSON.parse(JSON.stringify(newQuiz));
      } catch (e) {
        console.log(e);
      }
    },
    prevQuiz() {
      if (this.currIdx !== 0) {
        this.currIdx--;
      } else {
        this.$router.push("/");
      }
    },
    nextQuiz() {
      console.log(this.currIdx, this.quiz.length);
      if (this.quiz[this.currIdx].choosed && this.currIdx < this.quiz.length) {
        if (
          this.quiz[this.currIdx].choosed === this.quiz[this.currIdx].answer
        ) {
          this.$store.commit("MU_CHANGE_SCORE");
        }
        if (this.currIdx + 1 === this.quiz.length) {
          this.$router.push("/result");
        } else {
          this.currIdx++;
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
.tit {
  padding-left: 25px;
  font-weight: 700;
  font-size: 24px;
  word-break: keep-all;
  text-indent: -25px;
}
.quiz {
  margin-top: 30px;
  li {
    & + li {
      margin-top: 15px;
    }
  }
}
.btn-wrap {
  justify-content: space-between;
}
</style>
