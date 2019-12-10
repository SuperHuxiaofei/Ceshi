

const USER_POSTED_CONTENT = "USER_POSTED_CONTENT"

const defaultState = {
  postContent : ''
}

export default(state=defaultState,action)=>{
  switch(action.type){
    case USER_POSTED_CONTENT:
      return "USER_POSTED_CONTENT";
    default :
      return state
  }
}

export const userPostedContent = _=>(
  {
      type : USER_POSTED_CONTENT
  }
)