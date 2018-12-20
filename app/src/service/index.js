/*
* 模块调取后台登录模块api
* @api 后台api地址
*/
import HttpRequest from '../api/http'
function isLogin () {
    let jwt = localStorage.getItem('jwt')
    let userIdSto = localStorage.getItem('userId')
    if (jwt && userIdSto) {
      return { headers: {
        'sharePage': 1,
        'Jwt-Token': jwt
      } }
    }
    return {}
  }
const SERVICE = {
  // Jwt-Token 获取|需要uiserId
  getJwt: function (params) {
    return HttpRequest('post', '/login/getJwt', params)
  },
  // 获取国家区号列表
  getCountry: function () {
    return HttpRequest('post', '/login/country-code')
  },
  // 获取短信验证码
  phoneCode: function (params) {
    return HttpRequest('post', '/login/phone-code', params)
  },
  // 用户登录操作
  getLogin: function (params) {
    return HttpRequest('post', '/login/login', params)
  },
  // .二维码获取接口
  getqrcode: function (params) {
    return HttpRequest('post', '/login/channel-qrcode', params)
  },
    // 微信分享
    wxShare: function (params) {
        let headers = {'sharePage': 1, 'Jwt-Token': localStorage.getItem('jwt')}
        return HttpRequest('post', '/wechat/share', params, false, headers)
    },
    tabList: function () {
        let headers = isLogin()
        return HttpRequest('post', '/musicStar/getMusicStarTabList', {ds: 'dsds'}, false, headers)
      },
      // 获取音乐星球列表接口|需要参数
      getMusicStarList: function (params) {
        let headers = isLogin()
        return HttpRequest('post', '/musicStar/getMusicStarList', params, false, headers)
      },
      // .获取音乐星球详情接口
      starDetail: function (params) {
        let headers = isLogin()
        return HttpRequest('post', '/musicStar/getMusicStarDetail', params, false, headers)
      },
      // .获取音乐星球播放次数
      playerCout: function (params) {
        let headers = isLogin()
        return HttpRequest('post', '/musicStar/getMusicStarPlayTimes', params, false, headers)
      },
      // 获取是否付费
      purchase: function (params) {
        let headers = isLogin()
        return HttpRequest('post', '/login/purchase', params, false, headers)
      },
       // .MusicFMController（音乐FM相关）获取音乐FM的列表
      musicFmLlist: function (params) {
        let headers = isLogin()
        return HttpRequest('post', '/musicFM/getMusicFMList', params, false, headers)
      },
      // .MusicFMController（音乐FM相关）获取音乐FM的详情
      musicFmDetail: function (params) {
        let headers = isLogin()
        // console.log(headers)
        return HttpRequest('post', '/musicFM/getMusicFMDetail', params, false, headers)
      },
      // 获取用户音乐资源播放次数
      playTimes: function (params) {
        let headers = isLogin()
        return HttpRequest('post', '/play-times/get', params, false, headers)
      },
      // 用户音乐资源播放次数增加
      playTimesAdd: function (params) {
        let headers = isLogin()
        return HttpRequest('post', '/play-times/add', params, false, headers)
      },
      // 获取音乐星球是否上架接口
      getPublishStatusStar: function (params) {
        let headers = isLogin()
        return HttpRequest('post', '/musicStar/getPublishStatus', params, false, headers)
      },
      // 获取音乐FM的是否上架
      getPublishStatusFm: function (params) {
        let headers = isLogin()
        return HttpRequest('post', '/musicFM/getPublishStatus', params, false, headers)
      },
      // 获取音乐星球banner
      getStarBannerStatus: function (params) {
        let headers = isLogin()
        return HttpRequest('post', '/musicStar/getMusicStarBanner', params, false, headers)
      },
      // 获取音乐Fm列表接口|不需要参数
      fmTableList: function () {
        let headers = isLogin()
        return HttpRequest('post', '/musicFM/getMusicFMTabList', {ds: ''}, false, headers)
      },
      // 获取jwt-token |请求参数userId
      getJwt: function (params) {
        return HttpRequest('post', '/login/getJwt', params)
      }
}
export default SERVICE
