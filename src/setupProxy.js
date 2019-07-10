/*
* @Author: dell
* @Date:   2019-07-10 07:26:37
* @Last Modified by:   dell
* @Last Modified time: 2019-07-10 07:28:39
*/

const proxy = require("http-proxy-middleware");
 
module.exports = function(app) {
  app.use(
    proxy("/manage", {
      target: "http://admintest.happymmall.com",
      changeOrigin: true
    })
  );
};