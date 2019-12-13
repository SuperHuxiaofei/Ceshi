import axios from "axios"
const service = axios.create()
service.interceptors.request.use(config=>{
  config.headers = {
      ...config.headers,
      authToken : "12312312312312312"
  }
  return config
})
service.interceptors.response.use(res=>{
  return res
})
export default service