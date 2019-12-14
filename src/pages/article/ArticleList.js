import React,{Component} from "react"
import { Card } from 'antd'
import ArticleAll from './ArticleAll'


const tabListNoTitle = [
  {
    key: '全站',
    tab: '全站',
  },
  {
    key: '科学',
    tab: '科学',
  },
  {
    key: '时尚',
    tab: '时尚',
  },
]
class ArticleList extends Component {
  state = {
    key: 'tab1',
    noTitleKey: '全站',
    contentListNoTitle : {
      全站: <ArticleAll history={this.props.history}/>,
      科学: <ArticleAll history={this.props.history}/>,
      时尚: <ArticleAll history={this.props.history}/>,
    }
  }
  onTabChange = (key, type) => {
    // console.log(key, type)
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
          {this.state.contentListNoTitle[this.state.noTitleKey]}
        </Card>
      </div>
    )
  }
}
export default ArticleList