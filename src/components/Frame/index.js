import React,{Component} from "react"
import {withRouter} from "react-router-dom"
import { Layout, Menu, Icon } from 'antd'
import "../../assets/css/admin.css"
import {adminRouter} from "../../router/route"
import {connect} from "react-redux"
import {getColor} from "../../pages/setting/reducer/setting.redux"
const slide = adminRouter.filter((item)=>item.isOff === true)
const { Header, Content, Sider } = Layout;
class Admin extends Component {
  constructor(props){
    super(props)
  }
  getChildrenColor = () =>{
    this.setState({
      childrenMsg: this.refs['children'].state.color
  })
  }
  handleSelect(i){
    // console.log(i)
    this.props.history.push(slide[i].pathname)
  }
  render(){
    console.log(this.props)
    return (
      <div>
        <Layout>
          <Header className="header" style={{background:this.props.content.color,opacity: 0.5}}>
            <div className="logo" />
          </Header>
          <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={[this.props.location.pathname]}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                {
                  slide.map((item,index)=>{
                    return <Menu.Item key={item.pathname} onClick={this.handleSelect.bind(this,index)} style={{color :this.props.content.color }}>
                      <Icon type={item.icon} />
                      {item.title}</Menu.Item>
                  })
                }
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px'}}>
              <Content
                style={{
                  background: '#fff',
                  padding: 24,
                  margin: 24,
                  minHeight: 280,
                }}
              >
                {this.props.children}
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    )
  }
}
const mapStateToProps = (state)=>{
  return {
    content:state.colorStore
  }
}
export default connect(mapStateToProps,{getColor})(withRouter(Admin))