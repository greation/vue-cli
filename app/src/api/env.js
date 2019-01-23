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
        index: 'http://localhost:9090',
        testBucketDomain: 'http://test001.pnlyy.com/'
      },
      share: {
        defaultTitle: 'vip教室送您一节暑托体验课', // 默认分享标题
        defaultDesc: '在线收获孩子的点滴成长', // 默认分享描述
        defaultUrl: '', // 默认分享地址-为空则默认获取当前地址
        defaultImg: 'http://orgt5vbih.bkt.clouddn.com/wxShare.jpg', // 默认分享图片
        defaultApi: ['onMenuShareAppMessage', 'onMenuShareTimeline'] // 默认分享渠道
      },
      saApi:'https://vipweb-data-api.peilian.com/sa'
    },
    // DEV环境
    development: {
      api: 'https://music-resources-dev.peilian.com/music-resources/v1',
      // api: 'https://music-resources-qa.peilian.com/music-resources/v1',
      domainName: 'https://melody-dev.peilian.com',
      link: {
        index: 'http://webtree.dev.pnlyy.com'
      },
      share: {
        defaultTitle: 'vip教室送您一节暑托体验课', // 默认分享标题
        defaultDesc: '在线收获孩子的点滴成长', // 默认分享描述
        defaultUrl: '', // 默认分享地址-为空则默认获取当前地址
        defaultImg: 'http://orgt5vbih.bkt.clouddn.com/wxShare.jpg', // 默认分享图片
        defaultApi: ['onMenuShareAppMessage', 'onMenuShareTimeline'] // 默认分享渠道
      },
      saApi:'https://vipweb-data-api.peilian.com/sa'
    },
    // PRE环境
    pre: {
      api: 'https://music-resources-pre.peilian.com/music-resources/v1',
      domainName: 'https://melody-pre.peilian.com',
      link: {
        index: 'http://webtree.pre.pnlyy.com'
      },
      share: {
        defaultTitle: 'vip教室送您一节暑托体验课', // 默认分享标题
        defaultDesc: '在线收获孩子的点滴成长', // 默认分享描述
        defaultUrl: '', // 默认分享地址-为空则默认获取当前地址
        defaultImg: 'http://orgt5vbih.bkt.clouddn.com/wxShare.jpg', // 默认分享图片
        defaultApi: ['onMenuShareAppMessage', 'onMenuShareTimeline'] // 默认分享渠道
      },
      saApi:'https://vipweb-data-api.peilian.com/sa?project=production'
    },
    // PRD环境
    production: {
      api: 'https://music-resources.peilian.com/music-resources/v1',
      domainName: 'https://melody.peilian.com',
      link: {
        index: 'http://webtree.pnlyy.com'
      },
      share: {
        defaultTitle: 'vip教室送您一节暑托体验课', // 默认分享标题
        defaultDesc: '在线收获孩子的点滴成长', // 默认分享描述
        defaultUrl: '', // 默认分享地址-为空则默认获取当前地址
        defaultImg: 'http://orgt5vbih.bkt.clouddn.com/wxShare.jpg', // 默认分享图片
        defaultApi: ['onMenuShareAppMessage', 'onMenuShareTimeline'] // 默认分享渠道
      },
      saApi:'https://vipweb-data-api.peilian.com/sa?project=production'
    }
  }

  // 环境检测
    let host = window.location.host

    if (host.indexOf('melody-dev.peilian.com') > -1) {
        global.APIMSG = CONFIG.development
    } else if (host.indexOf('melody-pre.peilian.com') > -1) {
        global.APIMSG = CONFIG.pre
    } else if (host.indexOf('melody.peilian.com') > -1) {
        global.APIMSG = CONFIG.production
    } else {
        global.APIMSG = CONFIG.localhost
    }

    export default global.APIMSG

