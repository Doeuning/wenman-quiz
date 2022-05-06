const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/",
  /* publicPath:
    process.env.NODE_ENV === "production"
      ? "/" + require("./package.json").name + "/"
      : "/",*/
  // outputDir: "docs",
  filenameHashing: false,
  // runtimeCompiler: true,
  chainWebpack: (config) => {
    config.resolve.alias.set("@", path.resolve(__dirname, "src/"));
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `
            @import "@/assets/scss/_variables.scss";
            @import "@/assets/scss/_mixins.scss";
        `,
      },
    },
  },
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "project",
    },
  },
});
