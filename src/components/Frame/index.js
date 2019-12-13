import React,{Component} from "react"
import {withRouter} from "react-router-dom"
import { Layout, Menu, Icon, Switch, Badge, Button,Modal,List} from 'antd'
import "@/assets/css/admin.css"
import {adminRouter} from "@/router/route"
import {connect} from "react-redux"
import {getColor,getBack} from "@/pages/setting/reducer/setting.redux"
const slide = adminRouter.filter((item)=>item.isOff === true)
const { Header, Content, Sider } = Layout;
class Admin extends Component {
  state = {
    theme: 'light',
    visible: false,
    visibleMes: false,
    data : [
      {
        title: 'Ant Design Title 1',
      },
      {
        title: 'Ant Design Title 2',
      },
      {
        title: 'Ant Design Title 3',
      },
      {
        title: 'Ant Design Title 4',
      },
    ]
  };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  showModalMes = () => {
    this.setState({
      visibleMes: true,
    });
  };
  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
    this.props.history.push('/login')
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  handleOkMes = e => {
    console.log(e);
    this.setState({
      visibleMes: false,
    });
  };

  handleCancelMes = e => {
    console.log(e);
    this.setState({
      visibleMes: false,
    });
  };
  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  };
  handleSelect(i){
    this.props.history.push(slide[i].pathname)
  }
  
  render(){
    return (
      <div style={{fontFamily:this.props.content.fontstyle,fontSize:this.props.content.size}}>
        <Layout>
          <Header className="header" style={{background:this.props.content.color}}>
            <div 
            style={{background:'#fff',position:'absolute',right:150,top:25,width:50,height:30,borderRadius:'5px',textAlign:'center'}}
            onClick={this.showModalMes}
            >
              <Badge count={5} style={{position:'absolute',right:0,top:'-8px'}}>
                <a href="#" className="head-example" />
                消息
              </Badge>
            </div>
            <Modal
              title="未读消息列表"
              visible={this.state.visibleMes}
              onOk={this.handleOkMes}
              onCancel={this.handleCancelMes}
              cancelText="关闭"
              okText="查看详情"
            >
              <List
                itemLayout="horizontal"
                dataSource={this.state.data}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      title={<a href="https://ant.design">{item.title}</a>}
                      description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    />
                  </List.Item>
                )}
              />
            </Modal>
            <Button style={{position:'absolute',right:45,top:25}} onClick={this.showModal}>退出登录</Button>
            <Modal
              title="确认退出"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              cancelText="再玩一会~"
              okText="狠心退出"
            >
              <p>确定退出登录吗？</p>
            </Modal>
          </Header>
          <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
              <div>
                <Switch onChange={this.changeTheme} checkedChildren="白" unCheckedChildren="夜"/>
                <br />
                <br />
              </div>
              <Menu
                mode='vertical'
                defaultSelectedKeys={[this.props.location.pathname]}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
                theme={this.state.theme}
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
                  minHeight: 280,backgroundImage:`url(${this.props.content.url})`,backgroundRepeat: "no-repeat", backgroundSize: "100% 100%"
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
export default connect(mapStateToProps,{getColor,getBack})(withRouter(Admin))