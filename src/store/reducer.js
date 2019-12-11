import {combineReducers} from "redux"
import colorStore from "../pages/setting/reducer/setting.redux"
import login from "../pages/login/reducer"
import postContent from "../pages/postContent/reducer"
const reducers = combineReducers({
    login,
    postContent,
    colorStore
})
export default reducers
