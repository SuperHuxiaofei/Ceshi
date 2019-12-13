import axios from "./axios"
export const getArticleListData = ()=>{
  return axios.get("/swk/api/article")
}
export const getUserIsLogin = ()=>{
  return axios.get("/zqq")
}