import React,{Component} from "react"
import { Card, Table, Tag, Button, Icon} from 'antd'
const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    render: text => <a>{text}</a>,
  },
  {
    title: 'title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'author',
    dataIndex: 'author',
    key: 'author',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <Button.Group >
          <Button type="primary">
            编辑
          </Button>
          <Button type="danger">
            删除
          </Button>
        </Button.Group>
      </span>
    ),
  },
];
const data = [
  {
    key: '1',
    id: 'John Brown',
    title: 32,
    author: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    id: 'Jim Green',
    title: 42,
    author: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    id: 'Joe Black',
    title: 32,
    author: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
class ArticleList extends Component {
  render(){
    return (
      <div>
        <Card title="文章列表" bordered={false} style={{ width: '100%' }}>
          <Table columns={columns} dataSource={data} />
        </Card>
      </div>
    )
  }
}
export default ArticleList