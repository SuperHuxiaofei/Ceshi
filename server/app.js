const Koa = require('koa')//koa
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const app = new Koa()
const router = new Router()
const db = require('./db')
app
.use(bodyParser())
.use(router.routes())
.use(router.allowedMethods())
router.get('/',async ctx => {
  let mess = await db.find('group',ctx.query.dataName,{})
  // console.log("我执行到这了")
  ctx.body =  mess
})

//登录
router.post('/login',async ctx => {
  console.log(ctx.request.body)
  if (!ctx.request.body.userName) {
    ctx.body = {
      success:0,
      errMes:"请求错误"
    }
  } else {
    // const user = ctx.query
    // console.log(ctx.query)
    let mess = await db.find('group',"admin",ctx.request.body)
    if (mess.length === 0) {
      ctx.body = {
        success:0,
        errMes:"用户名或密码错误"
      }
    } else {
      ctx.body = {
        success:1,
        errMes:""
      }
    }
  }
  // await db.insert('userAll',ctx.query)
})
//注册


router.post('/register',async ctx => {
  if (!ctx.request.body.userName) {
    ctx.body = {
      success:0,
      errMes:"请求错误"
    }
  } else{
    let mess = await db.find('group',"admin",{userName:ctx.request.body.userName})
    if (mess.length === 0) {
      await db.insert('group',"admin",ctx.request.body)
      let fi = await db.find('group',"admin",{userName:ctx.request.body.userName})
      ctx.body = {
        success:1,
        errMes:"",
        data:fi
      }
    } else {
      ctx.body = {
        success:0,
        errMes:"用户已存在"
      }
    }
  }
})


app.listen(5678,_=>{
  console.log('listen to 5678')
})