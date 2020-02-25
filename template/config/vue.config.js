module.exports = {
  devServer: {
    host: "0.0.0.0",
    port: "8082",
    open: false
  },
  productionSourceMap: false,
  publicPath: "",
  lintOnSave: undefined,
  css: {
    loaderOptions: {
      // sass全局变量注入
      sass: {
        data: `@import "@/assets/styles/common.scss";`
      }
    }
  },
  chainWebpack: config => {
    // 移除 prefetch 插件
    config.plugins.delete('prefetch')
    // 移除 preload 插件
    config.plugins.delete('preload');
  }
};
