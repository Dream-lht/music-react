//craco配置react配置
const path = require('path');

const resolve = dir => path.resolve(__dirname,dir);

console.log(resolve("src"));
module.exports = {
  webpack:{
    alias:{
      "@":resolve("src"),
    }
  }
}