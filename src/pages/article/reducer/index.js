import {getArticleListData,getArticleListData2} from "@/axios/api"
const GET_ARTICLE_LIST = "GET_ARTICLE_LIST"
const defaultState = {
  listData:[]
}

export default (state=defaultState,action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch(action.type) {
    case GET_ARTICLE_LIST:
      newState.listData = action.data
      return newState
    default:
      return state
  }
}

function getData (data) {
  return {
    type:GET_ARTICLE_LIST,
    data
  }
}
export const getDataList = ()=>{
  return (dispatch) => {
    getArticleListData().then(res=>{
      dispatch(getData(res.data.data.articleList))
      // console.log(res.data.data.articleList)
    })
  }
}
export const getDataList2 = (i)=>{
  return (dispatch) => {
    getArticleListData2(i).then(res=>{
      dispatch(getData(res.data))
      console.log(res.data)
    })
  }
}