/*
* @Author: dell
* @Date:   2019-07-10 07:26:37
* @Last Modified by:   dell
* @Last Modified time: 2019-07-11 07:06:29
*/

const proxy = require("http-proxy-middleware");
 
module.exports = function(app) {
  app.use(
    proxy("/manage", {
      target: "http://admintest.happymmall.com",
      changeOrigin: true
    })
  );
  app.use(
    proxy("/user", {
      target: "http://admintest.happymmall.com",
      changeOrigin: true
    })
  );
};