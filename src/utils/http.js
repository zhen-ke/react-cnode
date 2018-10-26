import axios from 'axios';
import qs from "qs";
import { T } from 'react-toast-mobile';

// axios 配置
axios.defaults.timeout = 10000;
axios.defaults.baseURL = 'https://cnodejs.org/api/v1'

// http request 拦截器
axios.interceptors.request.use(config => {
  T.loading()
  let user = localStorage.user
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
    if (user) {
      config.data = config.data + `&accesstoken=${JSON.parse(user).accesstoken}`
    }
  }
  if (config.method === 'get') {
    if (user) {
      config.params = Object.assign(config.params, { accesstoken: JSON.parse(user).accesstoken })
    }
  }
  return config
},
  err => {
    return Promise.reject(err);
  });

// http response 拦截器
axios.interceptors.response.use(response => {
  T.loaded()
  return response;
},
  error => {
    T.loaded()
    return Promise.reject(error)
  });

export default axios;