const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'https://blog.zdldove.top',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }),
  )
}
