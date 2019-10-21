module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    devServer: {
        port:80,
        proxy: {
          '/api': {
            target: 'http://app.lnszgh.org/',
            changeOrigin: true,
            pathRewrite: {
              '^/api': ''
            }
          }
        }
      }
}