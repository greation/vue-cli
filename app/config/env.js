/*
* 全局环境配置
* localhost／ development／ pre／ production *
* @api 后台api地址
* @link 全局链接地址
* @share 全局分享默认配置
*/
const CONFIG = {
    // 本地环境
    localhost: {
      //  api: 'http://192.168.44.11:19010/music-resources/v1',
      api: 'https://music-resources-dev.peilian.com/music-resources/v1',
      domainName: 'https://melody-dev.peilian.com',
      link: {
        index: 'http://localhost:8080',
        testBucketDomain: 'http://test001.pnlyy.com/'
      },
      share: {
        defaultTitle: 'test', // 默认分享标题
        defaultDesc: 'test', // 默认分享描述
        defaultUrl: '', // 默认分享地址-为空则默认获取当前地址
        defaultImg: 'http://orgt5vbih.bkt.clouddn.com/wxShare.jpg', // 默认分享图片
        defaultApi: ['onMenuShareAppMessage', 'onMenuShareTimeline'] // 默认分享渠道
      },
      saApi:'https://vipweb-data-api.peilian.com/sa'
    }
  }  
  global.APIMSG = CONFIG.localhost
  export default global.APIMSG
  