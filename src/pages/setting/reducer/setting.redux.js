const GET_INTERFACE_COLOR = "GET_INTERFACE_COLOR"

const defaultState = {
    color : "#000"
}

export default (state = defaultState,action)=>{
    const newState = JSON.parse(JSON.stringify( state ))
    switch( action.type ){
        case GET_INTERFACE_COLOR :
            newState.color = action.data
            return newState;
        default:
            return state
    }
}

const setinterface = (data)=>{
    return {
        type : GET_INTERFACE_COLOR,
        data
    }
}

export function getColor(color){
      return (dispatch)=>{
        dispatch(setinterface(color))
      }
}
