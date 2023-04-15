import { defineConfig } from 'prext/config';
import { react, prexty } from 'prexty';

export default defineConfig({
  routes: './pages',

  // auto middleware mode
  // https://prext.netlify.app/guide/middlewares#auto-mode

  allowAutoMiddlewares: false,
  // middlewareDirectory: './middlewares',

  // 404 page
  // https://prext.netlify.app/guide/routing#404-page

  error(req, res) {
    res.statusCode = 404;

    res.end('404 page not found');
  },

  public: './public',
  plugins: [
    // adapter
    prexty(),
    // prexty react plugin
    react(),
  ],
});
