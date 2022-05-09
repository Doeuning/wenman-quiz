<template>
  <div class="main">
    <div class="intro jua">
      <div class="subtit">SBS 일일시트콤</div>
      <h1 class="tit">웬만해선<br />그들을 막을 수 없다</h1>
      덕후 LEVEL TEST
    </div>
    <div class="img-tv">
      <img class="tv" src="@/assets/images/tv.png" alt="" />
      <img class="img" src="@/assets/images/main.jpg" alt="" />
    </div>
    <div class="caution">
      ※ 결과가 다소 상스러울 수 있으니, <br />
      '웬만해선 그들을 막을 수 없다' 애청자만 이용 바랍니다.
    </div>
    <div class="input-box">
      <div class="row">
        <span class="txt">내 이름은</span>
        <input
          type="text"
          id="userName"
          v-model="userName"
          class="input"
          placeholder="노영삼"
        />
        <span class="txt"> 이고,</span><br />
      </div>
      <div class="row">
        <span class="txt">나이는</span>
        <input
          type="tel"
          id="userAge"
          v-model="userAge"
          class="input"
          placeholder="16"
          @keydown.enter="testStart"
        />
        <span class="txt"> 살입니다.</span>
      </div>
    </div>
    <div class="btn-wrap">
      <button type="button" class="btn-start" @click="testStart">
        시작하기
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "home-page",
  mounted() {},
  data() {
    return {
      userName: "",
      userAge: "",
    };
  },
  computed: {},
  methods: {
    ...mapMutations(["GET_USER_INFO"]),
    testStart() {
      if (this.userName !== "" && this.userAge !== "") {
        this.$store.commit("GET_USER_INFO", {
          name: this.userName,
          age: this.userAge,
        });
        this.$router.push("/quiz");
      } else {
        alert("이름과 나이를 입력해주세요.");
      }
    },
  },
};
</script>

<style scoped lang="scss">
.main {
  text-align: center;
}
.intro {
  font-size: 30px;
  .subtit {
    font-size: 18px;
  }
  .tit {
    margin: 10px 0 20px;
    font-size: 36px;
    line-height: 1;
  }
}
.img-tv {
  position: relative;
  width: 500px;
  height: 400px;
  margin: 10px auto 0;
  .tv {
    position: relative;
    z-index: 1;
  }
  .img {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
  }
  .mobile & {
    max-width: 320px;
    height: auto;
    margin: 0 auto;
    .img {
      width: 270px;
      top: 41%;
    }
  }
}
.caution {
  margin: 10px 0;
  font-weight: 700;
  color: red;
}
.input-box {
  position: relative;
  z-index: 10;
  margin: 20px 20px 0;
  .row {
    display: flex;
    align-items: center;
    & + .row {
      margin-top: 20px;
    }
  }
  .txt {
    flex: 1 0 auto;
    font-size: 26px;
  }
  .input {
    box-sizing: border-box;
    width: 80%;
    margin: 0 15px;
    border: 3px solid #000;
    border-radius: 0;
    padding: 5px 10px;
    background: #eee;
    font-weight: 700;
    font-size: 26px;
    line-height: 26px;
    text-align: center;
    outline: none;
    &::placeholder {
      font-size: 26px;
    }
  }
  .mobile & {
    .txt {
      font-size: 24px;
    }
  }
}
.btn-wrap {
  .btn-start {
    font-size: 26px;
  }
}
</style>
