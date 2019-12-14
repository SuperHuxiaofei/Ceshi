import React,{Component,Fragment} from "react"
import logo from "../../../assets/img/QQ图片20191214144406.png"
class LoginHeader extends Component {
  render(){
    return (
      <Fragment>
        <img src={logo} className="login-logo"/>
        <h1>Welcome to NB CRM</h1>
      </Fragment>
    )
  }
}
export default LoginHeader