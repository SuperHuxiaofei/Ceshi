const USER_POSTED_CONTENT = "USER_POSTED_CONTENT"
const DELETE_THIS = "DELETE_THIS"
const defaultState = {
  postContent : []
}
export default(state=defaultState,action)=>{
  const newState = JSON.parse(JSON.stringify(state))
  switch(action.type){
    case USER_POSTED_CONTENT:
      newState.postContent.push(action.data)
      return newState
    case DELETE_THIS:
      newState.postContent.splice(action.index,1)
      return newState
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
export function deleteThis (i){
  return {
    type : DELETE_THIS,
    index:i
  }
}