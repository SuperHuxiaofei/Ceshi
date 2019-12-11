

const USER_POSTED_CONTENT = "USER_POSTED_CONTENT"

const defaultState = {
  postContent : ''
}

export default(state=defaultState,action)=>{
  switch(action.type){
    case USER_POSTED_CONTENT:
      return {
        postContent : action.data
      }
    default :
      return state
  }
}

export function userPostedContent (data){
  return {
    type : USER_POSTED_CONTENT,
    data
  }
}