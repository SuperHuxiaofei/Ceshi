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
  {
    key: '影视',
    tab: '影视',
  }
]

const contentListNoTitle = {
  全站: <ArticleAll/>,
  科学: <p>app content</p>,
  时尚: <p>project content</p>,
  影视: <p>lalal content</p>,
}

class TabsCard extends Component {
  state = {
    key: 'tab1',
    noTitleKey: '全站',
  };

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };

  render() {
    return (
      <div>
        <Card
          style={{ width: '100%' }}
          tabList={tabListNoTitle}
          activeTabKey={this.state.noTitleKey}
          tabBarExtraContent={<a href="#">More</a>}
          onTabChange={key => {
            this.onTabChange(key, 'noTitleKey');
          }}
        >
          {contentListNoTitle[this.state.noTitleKey]}
          {/* <ArticleLists/> */}
        </Card>
      </div>
    )
  }
}

export default TabsCard