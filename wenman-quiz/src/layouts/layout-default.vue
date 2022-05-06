<template>
  <div id="wrap">
    <app-header />
    <keep-alive>
      <router-view :key="$route.path" />
    </keep-alive>
  </div>
</template>

<script>
import { layouts } from "@/utils/path";
export default {
  name: "LayoutDefault",
  components: {
    appHeader: layouts("app-header"),
  },
};
</script>

<style scoped lang="scss"></style>
