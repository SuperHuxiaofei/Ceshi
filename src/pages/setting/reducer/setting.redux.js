const GET_INTERFACE_COLOR = "GET_INTERFACE_COLOR"
const GET_BACK_GROUND = "GET_BACK_GROUND"
const GET_FONT_SIZE = "GET_FONT_SIZE"
const GET_FONT_STYLE = "GET_FONT_STYLE"

const defaultState = {
        color:localStorage.getItem('color'),
        url:localStorage.getItem('imgurl'),
        size:localStorage.getItem('size'),
        fontstyle:localStorage.getItem("fontstyle")
}

export default (state = defaultState,action)=>{
    const newState = JSON.parse(JSON.stringify( state ))
    switch( action.type ){
        case GET_INTERFACE_COLOR :
            newState.color = action.data
            return newState;
        case GET_BACK_GROUND :
            newState.url = action.data
            return newState;
        case  GET_FONT_SIZE :
            newState.size = action.data
            return newState;
        case  GET_FONT_STYLE :
            newState.fontstyle = action.data
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

const setBack = (data)=>{
    return {
        type : GET_BACK_GROUND,
        data
    }
}


export function getBack(url){
    return (dispatch)=>{
        dispatch(setBack(url))  
    }
}

const setSize = (data)=>{
    return {
        type : GET_FONT_SIZE,
        data
    }
}


export function getSize(size){
    return (dispatch)=>{
        dispatch(setSize(size))  
    }
}

const setFont= (data)=>{
    return {
        type : GET_FONT_STYLE,
        data
    }
}


export function getFont(style){
    return (dispatch)=>{
        dispatch(setFont(style))  
    }
}


