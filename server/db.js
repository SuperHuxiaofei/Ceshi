const MongoClient = require('mongodb').MongoClient
class Db{
  static creatDB() {
    if (!Db.install) Db.install = new Db()
    return Db.install
  }
  constructor () {
    this.db = ''
    // this.connect()
  }
  //连接数据库
  connect (mgName) {
    let that = this
    return new Promise((res,rej) => {
      if (!that.db) {
        MongoClient.connect(
          'mongodb://127.0.0.1:27017',
          {useNewUrlParser:true},
          (err,client) => {
            if (err) {
              rej(err)
              throw new TypeError(err)
            }
            that.db = client.db(mgName)
            res(that.db)
          }
        )
      }else res(that.db)
    })
  }
  //增
  insert (mgName,mdName,data) {
    const that = this
    return new Promise(async (res,rej) => {
      const cResult = await that.connect(mgName)
      cResult.collection(mdName).insertOne(data,(err,result) => {
        if (err) {
          rej(err)
          throw new TypeError(err)
        } else res(result)
      })
    })
  }
  //删
  delete (mgName,mdName,data) {
    const that = this
    return new Promise(async (res,rej) => {
      const cResult = await that.connect(mgName)
      cResult.collection(mdName).delete(data,(err,result) => {
        if (err) {
          rej(err)
          throw new TypeError(err)
        } else res(result)
      })
    })
  }
  //改
  update () {

  }
  //查
  find (mgName,mdName,data,index=1,size=10) {
    const that = this
    return new Promise(async (res,rej) => {
      const cResult = await that.connect(mgName)
      cResult.collection(mdName).find(data).skip((index - 1) * size).limit(size).toArray((err,result) => {
        if (err) {
          rej(err)
          throw new TypeError(err)
        } else res(result)
      })
    })
  }
}
module.exports = Db.creatDB()