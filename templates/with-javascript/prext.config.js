const { defineConfig } = require('prext');

const { Message } = require('./middlewares/message');

module.exports = defineConfig({
  routes: './pages',

  // auto middleware mode
  // https://prext.netlify.app/guide/middlewares#auto-mode

  // allowAutoMiddlewares: true,
  // middlewareDirectory: './middlewares',

  middlewares: [Message],

  // 404 page
  // https://prext.netlify.app/guide/routing#404-page

  error(req, res) {
    res.statusCode = 404;

    res.end('404 page not found');
  },
});
