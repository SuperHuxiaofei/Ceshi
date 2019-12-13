import axios from "./axios"
export const getArticleListData = ()=>{
  return axios.get("/article/api/article")
}

export const userLogin = (userInfo)=>{
  return axios.post("/api/login",userInfo)
}