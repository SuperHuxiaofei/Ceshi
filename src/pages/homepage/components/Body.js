import React,{Component} from "react"
import { Layout, Tabs, Card,Statistic} from 'antd'
const {Sider, Content } = Layout;
const { TabPane } = Tabs;
class Body extends Component {
  render(){
    return (
      <Layout className="homepageBody">
        <Content style={{background:'#fff'}}>
          <Tabs>
            <TabPane tab="动态" key="1">
              动态
            </TabPane>
            <TabPane tab="关注" key="2">
              关注
            </TabPane>
            <TabPane tab="更多" key="3">
              更多
            </TabPane>
          </Tabs>
        </Content>
        <Sider style={{background:'#999',marginLeft:8}}>
          <Card size="small" title="个人成就" style={{ width: 300 }}>
            <p>动态</p>
            <p>关注</p>
            <p>Card content</p>
          </Card>
          <Card size="small" style={{ width: 300 }} className="amount">
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
export default Body