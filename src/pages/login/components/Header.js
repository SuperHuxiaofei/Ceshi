import React,{Component,Fragment} from "react"
import logo from "@/assets/img/ZqqUni.png"
class LoginHeader extends Component {
  render(){
    return (
      <Fragment>
        <img src={logo} className="login-logo"/>
        <h1>ZqqUni网站欢迎您的登录</h1>
      </Fragment>
    )
  }
}
export default LoginHeader