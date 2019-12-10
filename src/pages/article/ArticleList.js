import React,{Component} from "react"
import { Card } from 'antd'


const tabListNoTitle = [
  {
    key: 'article',
    tab: 'article',
  },
  {
    key: 'app',
    tab: 'app',
  },
  {
    key: 'project',
    tab: 'project',
  },
]

const contentListNoTitle = {
  article: <p>article content</p>,
  app: <p>app content</p>,
  project: <p>project content</p>,
}


class ArticleList extends Component {
  state = {
    key: 'tab1',
    noTitleKey: 'app',
  }
  onTabChange = (key, type) => {
    console.log(key, type)
    this.setState({ [type]: key })
  }
  render(){
    return (
      <div>
        <Card
          style={{ width: '100%' }}
          tabList={tabListNoTitle}
          activeTabKey={this.state.noTitleKey}
          tabBarExtraContent={<a href="#">More</a>}
          onTabChange={key => {
            this.onTabChange(key, 'noTitleKey')
          }}
        >
          {contentListNoTitle[this.state.noTitleKey]}
        </Card>
      </div>
    )
  }
}
export default ArticleList