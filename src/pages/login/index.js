import React,{Component} from "react"
import { Layout } from 'antd'
import LoginHeader from "./components/Header"
import LoginFooter from "./components/Footer"
import LoginContent from "./components/Content"
import "@/assets/css/login.css"
const { Header, Footer, Content } = Layout
class Login extends Component {
  render(){
    // console.log(this.props.form)
    return (
        <div>
          <Layout>
            <Header style={{height:"99px",backgroundColor:"#f0f2f5"}}>
              <LoginHeader/>
            </Header>
            <Content>
              <LoginContent/>
            </Content>
            <Footer>
              <LoginFooter/>
            </Footer>
          </Layout>
        </div>
    )
  }
}
export default Login