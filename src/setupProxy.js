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
    target:'http://10.9.67.241:3000',
    secure:true,
    changeOrigin:true,
    pathRewrite:{
      "^/swk":"/"
    }
  }))
  app.use(proxy('/article',{
    target:'http://rap2api.taobao.org/app/mock/239687',
    secure:true,
    changeOrigin:true,
    pathRewrite:{
      "^/article":"/"
    }
  }))
}