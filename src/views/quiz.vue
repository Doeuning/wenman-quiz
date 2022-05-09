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
        @click="giveup"
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
      if (
        this.currIdx > this.quiz.length / 2 &&
        this.$store.state.score <= 30
      ) {
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
    giveup() {
      if (confirm("게임을 포기하고 맨 앞으로 이동합니다.")) {
        this.$router.push("/");
      }
    },
    prevQuiz() {
      if (this.currIdx !== 0) {
        this.currIdx--;
        this.getScore();
      } else {
        this.$router.push("/");
      }
    },
    nextQuiz() {
      // 정답을 선택했으면 인덱스추가, 점수가져오기
      if (this.quiz[this.currIdx].choosed) {
        this.currIdx++;
        this.getScore();
        console.log("정답선택");
      }
      if (this.currIdx + 1 > this.quiz.length) {
        this.$router.push("/result");
        console.log("결과로 이동");
      }

      console.log(this.$store.state.score);
    },
    getScore() {
      this.$store.commit("MU_CHANGE_SCORE", this.quiz); // 점수 변경
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
