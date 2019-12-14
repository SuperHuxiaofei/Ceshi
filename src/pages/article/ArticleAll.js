import React,{Component} from "react"
import {connect} from "react-redux"
import ContentList from './ContentList'
import {getDataList2} from "../article/reducer"
class ArticleAll extends Component{
  render(){
    // console.log(this.props)
    return(
      <ContentList listData={this.props.listData} history={this.props.history}/>
    )
  }
  componentDidMount(){
    this.props.getDataList2(2)
  }
}
const mapStateToProps = (state) => {
  return state.article
}
export default connect(mapStateToProps,{getDataList2})(ArticleAll)