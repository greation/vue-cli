/*
 * axios http请求配置
 * @baseURL 请求api地址
 * @headers 头文件设置
 * @timeout 超时时间
 */
import Vue from 'vue'
import Axios from 'axios'
// import Qs from 'qs';
import { Toast, Indicator } from 'mint-ui'
import Env from './env-pro'
// import Tips from './tips'
Vue.component(Toast.name, Toast)

Axios.defaults.timeout = 5000
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
if (Env.api.indexOf('/login/login') !== -1 || Env.api.indexOf('/login/getJwt')) {
  Axios.defaults.headers.post['Jwt-Token'] = localStorage.getItem('jwt')
}
Axios.defaults.baseURL = Env.api || 'http://localhost:8080' // 当前环境地址

// POST传参序列化
Axios.interceptors.request.use((config) => {
  Indicator.open()
  return config
}, (error) => {
  // Toast(Tips.request.errorData)
  return Promise.reject(error)
})

// code状态码200判断
Axios.interceptors.response.use((res) => {
  Indicator.close()
  if (res.data.code !== 200 && res.data.code) {
    // Toast(res.data.msg)
    return Promise.reject(res)
  }
  // Toast(res.data.msg);
  return res
}, (error) => {
  Indicator.close()
  // Toast(Tips.request.errorNet)
  return Promise.reject(error)
})

export default Axios
