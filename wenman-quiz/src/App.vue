<template>
  <div
    id="app"
    :class="{
      pc: !mobileYn,
      mobile: mobileYn,
    }"
  >
    <component :is="AppLayout" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import layoutDefault from "@/layouts/layout-default";
import layoutClean from "@/layouts/layout-clean";

export default {
  name: "App",
  components: {
    LayoutDefault: layoutDefault,
    LayoutClean: layoutClean,
  },
  computed: {
    ...mapState(["mobileYn"]),
    AppLayout() {
      const layout =
        this.$route.meta.layout || this.$route.matched[0]?.meta?.layout;
      return layout ? `Layout${layout}` : null;
    },
  },
  mounted() {
    console.log(this.mobileYn);
  },
};
</script>

<style lang="scss" src="./assets/scss/common.scss" />
