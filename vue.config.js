module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/scss/common.scss";'
      }
    }
  },
  publicPath: '/online-retailers-UI/example'
}
