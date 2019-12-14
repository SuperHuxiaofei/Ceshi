import axios from "./axios"
export const getArticleListData = ()=>{
  return axios.get("/swk/api/article")
}
export const getUserIsLogin = ()=>{
  return axios.get("/zqq")
}
export const getArticleListData2 = (i)=>{
  return axios.get(`/hxy/articles?retrieve_type=by_category&page=${i}`)
}