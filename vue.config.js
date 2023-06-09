const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8081/", //接口域名
        changeOrigin: true, //是否跨域
        ws: false, //是否代理 websockets
        secure: false, //是否https接口
        pathRewrite: {
          //路径重置
          "^/api": "/api",
        },
      },
    },
  },
};
