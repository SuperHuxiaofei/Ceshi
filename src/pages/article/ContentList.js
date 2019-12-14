import React,{Component} from 'react'
import { List, Icon } from 'antd'
import {Link} from "react-router-dom"

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
)
class ContentList extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
            },
            pageSize: 3,
          }}
          dataSource={this.props.listData}
          footer={
            <div>
              <b>啦啦啦</b> 底部
            </div>
          }
          renderItem={(item,index) => (
            <List.Item
              key={item.id}
              actions={[
                <IconText type="fire" text={item.category.articles_count} key="list-vertical-star-o" />,
                <IconText type="share-alt" text="分享" key="list-vertical-like-o" />
              ]}
              extra={
                <img
                  width={272}
                  alt="logo"
                  src={item.small_image+'?imageView2/1/w/576/h/384'}
                />
              }
            >
              <List.Item.Meta
                title={<Link to={{
                  pathname:'/admin/articleEdit',
                  params:{index}
                }}>{item.title}</Link>}
                description={item.summary}
              />
              {item.author.title}
            </List.Item>
          )}
        />
      </div>
    )
  }
}

export default ContentList