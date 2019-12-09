import { userLogin } from "../../../api/api"
const userInfo = JSON.parse(localStorage.getItem("userInfo"))
const defaultState = {
    "avatar": userInfo && userInfo.avatar || "",
    "nickname": userInfo && userInfo.nickname || "",
    "uid": userInfo && userInfo.uid || "",
    "authToken": userInfo && userInfo.authToken || "",
    "userStatus": userInfo && userInfo.userStatus || 3
}
const GET_USER_INFO = "GET_USER_INFO"

export default (state = defaultState, action) => {
    switch (action.type) {
        case GET_USER_INFO:
            return action.data
        default:
            return state
    }

}

const getUserInfo = (data) => ({
    type: GET_USER_INFO,
    data
})

export const setUserInfo = (userInfo) => {
    return (dispatch) => {
        userLogin(userInfo)
            .then(res => {
                if (userInfo.remember) {
                    localStorage.setItem("userInfo", JSON.stringify(res.data))
                } else {
                    sessionStorage.setItem("userInfo", JSON.stringify(res.data))
                }
                dispatch(getUserInfo(res.data))
            })
    }
}
