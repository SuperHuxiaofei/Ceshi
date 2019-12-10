import React,{Component} from "react"
import { Carousel } from 'antd'
class Banner extends Component {
  render(){
    return (
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
    )
  }
}
export default Banner