import React,{Component} from "react"
import {connect} from "react-redux"
import ContentList from './ContentList'
import {getDataList,getDataList2} from "../article/reducer"
class ArticleAll extends Component{
  render(){
    // console.log(this.props)
    return(
      <ContentList listData={this.props.listData}/>
    )
  }
  componentDidMount(){
    this.props.getDataList2(1)
  }
}
const mapStateToProps = (state) => {
  return state.article
}
export default connect(mapStateToProps,{getDataList,getDataList2})(ArticleAll)