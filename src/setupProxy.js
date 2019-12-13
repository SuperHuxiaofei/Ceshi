const proxy = require('http-proxy-middleware')
module.exports = (app) => {
  //一个代理
  app.use(proxy('/zqq', { 
       target:' http://localhost:5678',
       secure: true,
       changeOrigin: true,
       pathRewrite: {
        "^/zqq": "/"
       },
       // cookieDomainRewrite: "http://localhost:3000"
    }))
  app.use(proxy('/swk',{
    target:'http://rap2api.taobao.org/app/mock/239687',
    secure:true,
    changeOrigin:true,
    pathRewrite:{
      "^/swk":"/"
    }
  }))
}