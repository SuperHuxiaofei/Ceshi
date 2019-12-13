import React,{Component} from "react"
// import ContentList from './ContentList'
import { List,Button,Icon } from 'antd'



class ArticleEdit extends Component {
  constructor(props){
    super(props)
    this.state={
      listData:[{
        href: '#',
          title: `测试！`,
          description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
          content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      }]
    }
  }
  render(){
    return (
      // <ContentList listData={this.state.listData}/>
      <div>
        <List
          itemLayout="vertical"
          size="large"
          dataSource={this.state.listData}
          // footer={
          //   <div>
          //     <b>啦啦啦</b> 底部
          //   </div>
          // }
          header={
            <div>
              <h1 style={{fontSize:22,fontWeight:'bold',marginBottom:20}}>年轻女性背什么的包比较好？</h1>
              <Button type="primary" style={{margin:8, fontSize:15}}>关注问题</Button>
              <Button icon="edit" style={{margin:8,fontSize:15}}>写回答</Button>
              <Button icon="user-add" style={{margin:8,fontSize:15}}>邀请回答</Button>
              <Icon type="heart" theme="filled"  style={{margin:8,fontSize:15}}/>点赞
              <Icon type='share-alt' style={{margin:8,fontSize:15}}/>分享
              <Icon type="thunderbolt" theme="filled" style={{margin:8,fontSize:15}} />举报
              <Icon type="ellipsis" style={{margin:8,fontSize:15}} />
            </div>
          }
          renderItem={item => (
            <List.Item
              key={item.title}
              extra={
                <img
                  width={272}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              }
            >
              <List.Item.Meta
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
              />
              {item.content}
            </List.Item>
          )}
        />
      </div>
    )
  }
}
export default ArticleEdit