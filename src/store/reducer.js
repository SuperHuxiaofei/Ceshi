import {combineReducers} from "redux"
import colorStore from "../pages/setting/reducer/setting.redux"
import login from "../pages/login/reducer"
import postContent from "../pages/postContent/reducer"
const reducer = combineReducers({colorStore,login,postContent})
export default reducer
