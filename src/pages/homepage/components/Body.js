import React,{Component} from "react"
import { Layout, Tabs, Card,Statistic,Timeline } from 'antd'
import {connect} from "react-redux"
import {deleteThis} from "@/pages/postContent/reducer"
const {Sider, Content } = Layout;
const { TabPane } = Tabs;
class Body extends Component {
  render(){
    return (
      <Layout className="homepageBody">
        <Content style={{background:'#fff',float:'left',margin:8}}>
          <Tabs>
            <TabPane tab="动态" key="1">
            <Timeline>
              {
                this.props.postList.map((item,index)=>{
                  return <Timeline.Item key={index}>
                    <p  dangerouslySetInnerHTML = {{__html:item}}></p><span>删除</span>
                  </Timeline.Item>
                })
              }
            </Timeline>
            </TabPane>
            <TabPane tab="关注" key="2">
              关注
            </TabPane>
            <TabPane tab="更多" key="3">
              更多
            </TabPane>
          </Tabs>
        </Content>
        <Sider style={{background:'#999',margin:8}}>
          <Card size="small" title="个人成就" style={{ width: '100%'}}>
            <p>动态</p>
            <p>关注</p>
            <p>Card content</p>
          </Card>
          <Card size="small" style={{ width: '100%'}} className="amount">
            <Statistic
              title="关注了"
              value={3}
              valueStyle={{ color: '#000' }}
            />
            <Statistic
              title="关注者"
              value={3}
              valueStyle={{ color: '#000' }}
            />
          </Card>
        </Sider>
      </Layout>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    postList:state.postContent.postContent
  }
}
export default connect(mapStateToProps,{deleteThis})(Body)