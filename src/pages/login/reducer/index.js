import { userLogin } from "../../../axios/api"
const userInfo = JSON.parse(localStorage.getItem("userInfo"))
const defaultState = {
	"avatar": userInfo && userInfo.avatar || "",
	"nickname": userInfo && userInfo.nickname || "",
	"uid": userInfo && userInfo.uid || "",
	"authToken": userInfo && userInfo.authToken || "",
	"userStatus": userInfo && userInfo.userStatus || 3
}
const GET_USER_INFO = "GET_USER_INFO"
const SET_USER_INFO = "SET_USER_INFO"

export default (state = defaultState, action) => {
	switch (action.type) {
		case GET_USER_INFO:
			return action.data
		case SET_USER_INFO:
			return state
		default:
			return state
	}

}

const getUserInfoData = (data) => ({
	type: GET_USER_INFO,
	data
})
const setUserInfoData = (data) => ({
	type: SET_USER_INFO,
	data
})

//注册
export const setUserInfo = (userInfo) => {
    return (dispatch) => {
        userLogin(userInfo)
            .then(res=>{
                if(userInfo.remember){
                    localStorage.setItem("userInfo",JSON.stringify(res.data))
                }else{
                    sessionStorage.setItem("userInfo",JSON.stringify(res.data))
                }
                dispatch(getUserInfo(res.data))
            })
    }
}
//登录
export const getUserInfo = (userInfo) => {
	return (dispatch) => {
		
	}
}