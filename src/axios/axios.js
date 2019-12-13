import axios from "axios"
const service = axios.create({
  baseURL : "http://rap2api.taobao.org/app/mock/239138"
})
service.interceptors.request.use(config=>{
  console.log(config)
  config.headers = {
      ...config.headers,
      authToken : "12312312312312312"
  }
  return config
})
service.interceptors.response.use(res=>{
  // console.log(res)
  return res.data
})
export default service