import React,{Component} from 'react'
import { List, Icon } from 'antd'


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
              console.log(page);
            },
            pageSize: 3,
          }}
          dataSource={this.props.listData}
          footer={
            <div>
              <b>啦啦啦</b> 底部
            </div>
          }
          renderItem={item => (
            <List.Item
              key={item.title}
              actions={[
                <IconText type="fire" text="156 万领域热度" key="list-vertical-star-o" />,
                <IconText type="share-alt" text="分享" key="list-vertical-like-o" />
              ]}
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

export default ContentList