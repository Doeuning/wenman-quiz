<template>
  <div class="result">
    <h1 class="txt">{{ $store.state.userName }}님의 웬만덕후 레벨은????</h1>
    <div
      :class="{
        'img-box': true,
        'level-4': result === '짱',
        'level-3': result === '붕',
        'level-2': result === '열라붕',
        'level-1': result === '열라붕신',
      }"
    >
      <img src="@/assets/images/level.jpg" alt="" />
      <span class="user jua">{{ $store.state.userName }}</span>
    </div>
    <h2 class="score">총점 {{ total }}점으로</h2>
    <div class="txt">
      {{ member }}과(와) 같은
      <div class="tit jua">
        "{{ result }}<span v-if="$store.state.userAge > 35">님</span>"
      </div>
      입니다.
    </div>
    <div class="btn-wrap">
      <button class="btn-replay" @click="replay">억울하면 다시하기</button>
      <button class="btn-share" type="button" @click="copyUrl">
        URL 복사하기
      </button>
    </div>
    <!--    <div class="btn-wrap">-->
    <!--      <a-->
    <!--        href="https://www.instagram.com/puppip_the_developer/"-->
    <!--        target="_blank"-->
    <!--        class="btn-go"-->
    <!--        >개발자 인스타에서 난이도 항의하기</a-->
    <!--      >-->
    <!--    </div>-->
    <div class="footer">
      <div>&copy; 2022. Dawn. All rights reserved.</div>
      <div>doeuning@gmail.com</div>
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
      this.member = "권재황";
    } else if (this.total >= 75 && this.total < 90) {
      this.result = "짱"; // 15문제
      this.member = "노인삼, 노미나";
    } else if (this.total >= 50 && this.total < 75) {
      this.result = "붕"; // 10문제
      this.member = "노홍렬, 노민정, 노윤영";
    } else if (this.total >= 35 && this.total < 50) {
      this.result = "열라붕"; // 7문제
      this.member = "함재희, 김지현";
    } else {
      this.result = "열라붕신";
      this.member = "권오중";
    }
  },
  data() {
    return {
      result: "",
      member: "권재황",
      total: this.$store.state.score,
    };
  },
  methods: {
    ...mapMutations(["MU_RESET_SCORE"]),
    replay() {
      this.$router.push("/");
      this.$store.commit("MU_RESET_SCORE");
    },
    copyUrl() {
      const dummy = document.createElement("input");
      const text = location.href.replace(this.$route.fullPath, "");

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
@keyframes move {
  0% {
    transform: translateX(10px);
  }
  50% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(10px);
  }
}
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
    top: 9%;
    right: 120px;
    text-shadow: 3px 4px 5px rgba(0, 0, 0, 0.3);
    font-weight: 700;
    font-size: 26px;
    color: #fff;
    z-index: 20;
    animation: move 1s ease-in-out infinite;
  }
  &.level-4 {
    .user {
      top: 26%;
      right: 60px;
    }
  }
  &.level-3 {
    .user {
      top: 45%;
      right: 19px;
    }
  }
  &.level-2 {
    .user {
      top: 64%;
      right: 60px;
    }
  }
  &.level-1 {
    .user {
      top: 83%;
      right: 120px;
    }
  }
}
.txt {
  margin-top: 10px;
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
.footer {
  margin: 50px -20px 0;
  border-top: 1px solid #ddd;
  padding: 30px 0;
}
</style>
