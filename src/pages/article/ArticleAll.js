import React,{Component} from "react"

import ContentList from './ContentList'

class ArticleAll extends Component{
  constructor(props){
    super(props);
    this.state={
      listData : []
    }
  }
  render(){
    return(
      <ContentList listData={this.state.listData}/>
    )
  }
  componentWillMount(){
      const newList = []
      for(let i = 0;i<20;i++){
        newList.push({
          href: '#',
          title: `测试！ ${i}`,
          description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
          content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        })
      }
      this.setState({
        listData:newList
      })
}
}

export default ArticleAll