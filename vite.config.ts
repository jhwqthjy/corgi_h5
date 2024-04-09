import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
// import devtools from 'solid-devtools/vite';

export default defineConfig({
  plugins: [
    /* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    // devtools(),
    solidPlugin(),
  ],
  server: {
    port: 3000,
    cors: true,
    host: "0.0.0.0",
  },
  base:
    process.env.NODE_ENV === "production" ? `/html/wechat/invite_user` : "/",
  build: {
    target: "es2018",
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
