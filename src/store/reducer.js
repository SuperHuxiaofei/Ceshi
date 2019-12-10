import {combineReducers} from "redux"
import login from "../pages/login/reducer"
import postContent from "../pages/postContent/reducer"
const reducers = combineReducers({
    login,
    postContent
})
export default reducers