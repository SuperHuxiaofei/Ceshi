import React,{Component} from "react"
// import ContentList from './ContentList'
import { List,Button,Icon } from 'antd'
import {connect} from "react-redux"
const reg = /[.png|.jpg|.gif|.jpeg]/
class ArticleEdit extends Component {
  constructor(props){
    super(props)
    this.state={
      listData:[this.props.listData[this.props.location.params.index]]  
    }
  }
  render(){
    console.log(this.props)
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
              <h1 style={{fontSize:22,fontWeight:'bold',marginBottom:20}}>{this.state.listData[0].title}</h1>
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
            >
            <img src={item.small_image+'?imageView2/1/w/576/h/384'}/>
              <List.Item.Meta
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
              />
              {item.text}
            </List.Item>
          )}
        />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return state.article
}
export default connect(mapStateToProps,null)(ArticleEdit)