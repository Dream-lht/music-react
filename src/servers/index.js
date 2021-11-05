import axios from 'axios';
import Qs from 'qs';
//导入默认地址
import baseUrl from './config'

/*对网络请求进行封装*/

//创建一个axios实例
const http = axios.create({
  baseURL:baseUrl,
  timeout:5000,

//对params进行序列化
  paramsSerializer: function(params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },
});

export default http;
