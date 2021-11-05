//对默认请求地址配置

//开发环境后台地址
const dev_base_url = "http://123.207.32.32:9001";
//生产环境后台地址
const pro_base_url = "http://123.207.32.32:9001";

//最终导出的url
let  baseUrl = "";
if(process.env.NODE_ENV  === "development"){
  baseUrl = dev_base_url;
}else {
  baseUrl = pro_base_url;
}

//导出后台地址
export default baseUrl;