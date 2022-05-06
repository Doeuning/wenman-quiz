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
    <div class="btn-wrap">
      <button type="button" class="btn-start" @click="testStart">
        시작하기
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "home-page",
  mounted() {},
  methods: {
    testStart() {
      this.$router.push("/quiz");
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
  margin: 0 auto;
  .tv {
    position: relative;
    z-index: 1;
  }
  .img {
    position: absolute;
    top: 41%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 420px;
  }
  .mobile & {
    max-width: 320px;
    .img {
      width: 250px;
    }
  }
}
.btn-wrap {
  margin-top: 0;
  .btn-start {
    font-size: 26px;
  }
}
</style>
