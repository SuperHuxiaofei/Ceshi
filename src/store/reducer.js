import {combineReducers} from "redux"
import colorStore from "../pages/setting/reducer/setting.redux"
import login from "../pages/login/reducer"
import postContent from "../pages/postContent/reducer"
import article from "../pages/article/reducer"
const reducer = combineReducers({colorStore,login,postContent,article})
export default reducer
