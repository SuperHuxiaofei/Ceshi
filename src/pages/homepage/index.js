import React,{Component} from "react"
import { Card,  Avatar, Collapse, Icon} from 'antd'
import "@/assets/css/homepage.css"
import Banner from "./components/Banner"
import HomepageBody from "./components/Body"
const { Panel } = Collapse;
const { Meta } = Card;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
};
class Homepage extends Component {
  render(){
    return (
      <div>
        <Card
          style={{ width: '100%' }}
          cover={
            <Banner/>
          }
        >
          <Meta
                avatar={<Avatar src="http://b-ssl.duitang.com/uploads/item/201802/05/20180205002036_qebfm.thumb.700_0.jpg" />}
                title="用户id"
                description={
                  <Collapse
                    bordered={false}
                    defaultActiveKey={['1']}
                    expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
                  >
                    <Panel header="展开个人描述" key="1" style={customPanelStyle}>
                      <p>{text}</p>
                    </Panel>
                  </Collapse>
                }
              />
          <HomepageBody/>
        </Card>
      </div>
    )
  }
}
export default Homepage