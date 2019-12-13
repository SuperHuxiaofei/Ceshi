import axios from "./axios"
export const getArticleListData = ()=>{
  return axios.get("/article/api/article")
}