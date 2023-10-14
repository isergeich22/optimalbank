const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://195.93.252.223:8081',
      changeOrigin: true,
    }),
  );
};
