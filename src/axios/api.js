import axios from "./axios"
export const getArticleListData = ()=>{
  return axios.get("/swk/api/article")
}
export const userLogin = (userInfo)=>{
  return axios.get("/teacher/api/login",userInfo)
}