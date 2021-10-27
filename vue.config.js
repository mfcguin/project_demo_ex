module.exports = {
  lintOnSave: false,

  devServer: {
    proxy: {
      '/api': {
        target: 'https://m.maizuo.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
