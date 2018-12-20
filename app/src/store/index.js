//状态管理

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state ={
    loginStatus:{}, //登录状态
    isPay:{} // 是否付费
}
const getters = {
    loginStatus:state => state.loginStatus,
    isPay:state => state.isPay
}
const mutations = {
    login(state,data){
        state.loginStatus =data
    },
    payStatus(state,data){
        state.isPay =data
    }

}
export default new Vuex.Store({
    state,
    getters,
    mutations,
    modules:{
        loginStore,
        homeStore
    }
})

































