import React,{Component} from "react"
import { Card, Icon, Avatar,Timeline, Carousel } from 'antd'
import "../../assets/css/homepage.css"
const { Meta } = Card;
class Homepage extends Component {
  render(){
    return (
      <div>
        <Card
          style={{ width: '100%' }}
          cover={
            <Carousel autoplay>
              <img
                alt="example"
                src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575900505094&di=daafe70a1e78e848cfdb721bb630b1fb&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201708%2F21%2F20170821102718_wf2ZX.thumb.700_0.jpeg"
              />
              <img
                alt="example"
                src="http://pic1.win4000.com/wallpaper/2018-07-21/5b52c38319273.jpg"
              />
              <img
                alt="example"
                src="http://pic1.win4000.com/wallpaper/7/5469a105e2c97.jpg"
              />
            </Carousel>
          }
          actions={[
            <Icon type="setting" key="setting" onClick={()=>{this.props.history.push("/admin/setting")}}/>,
            <Icon type="edit" key="edit" />,
            <Icon type="ellipsis" key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={<Avatar src="http://b-ssl.duitang.com/uploads/item/201802/05/20180205002036_qebfm.thumb.700_0.jpg" />}
            title="用户id"
            description="用户描述"
          />
          {/* 这里写个循环 */}
          <Timeline mode="alternate">
            <Timeline.Item>建立了nb项目组的个人主页第一步</Timeline.Item>
            <Timeline.Item color="green">hhh建立了nb项目组的个人主页第二步</Timeline.Item>
            <Timeline.Item>yyyyyy建立了nb项目组的个人主页第三步</Timeline.Item>
            <Timeline.Item color="green">aaaa建立了nb项目组的个人主页第四步</Timeline.Item>
            <Timeline.Item>
              Technical testing 2015-09-01
            </Timeline.Item>
          </Timeline>
        </Card>
      </div>
    )
  }
}
export default Homepage