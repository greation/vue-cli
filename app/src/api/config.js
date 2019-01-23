/*
 * axios http请求配置
 * @baseURL  请求api地址
 * @headers  头文件设置
 * @timeout  超时时间
 */

import Vue from 'vue'
import Axios from 'axios'

import { Toast, Indicator } from 'mint-ui'
import Env from './env'

Vue.component(Toast.name, Toast)

Axios.defaults.timeout =5000
Axios.defaults.headers.port['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

if (Env.api.indexOf('/login/login') !== -1 || Env.api.indexOf('/login/getJwt')) {
    Axios.defaults.headers.port['Jwt-Token'] = localStorage.getItem('jwt')
}
Axios.defaults.baseURL = Env.api || 'http://localhost:8080'

// post
Axios.interceptors.request.use((config) => {
    Indicator.open()
    return config
},(error) => {
    return Promise.reject(error)
})

// code === 200
Axios.interceptors.response.use((res) => {
    Indicator.close()
    if(res.data.code !== 200 && res.data.code ) {
        return Promise.reject(res)
    }
    return res
},(error) => {
    Indicator.close()
    return Promise.reject(error)
})

export default Axios





















