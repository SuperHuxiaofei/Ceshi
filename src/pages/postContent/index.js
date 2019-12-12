import React, { Component } from "react"
import { message} from 'antd';
import { connect } from "react-redux"
import {userPostedContent} from "./reducer"
import E from 'wangeditor'

class PostContent extends Component {
  constructor(props) {
    super(props)
    // console.log(this.context)
    this.state = {
      editor:''
    }
  }
  render() {
    return (
      <div>
        {/* 将生成编辑器 */}
        <div ref="editorElem" style={{ textAlign: 'left', width: 'auto', minWidth: 750, margin: '10px auto' }}></div>
        <button onClick={this.clickHandle.bind(this)}>提交</button>
      </div>
    )
  }
  componentDidMount() {
    // const elem = this.refs.editorElem
    // const editor = new E(elem)
    // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
    this.setState((state)=>{
      return {
        editor:new E(this.refs.editorElem)
      }
    },_=>{
      this.state.editor.create()
      this.state.editor.txt.html("<p>请输入内容</p>")
    })
    console.log(this.state.editor)
  }

  clickHandle() {
    // console.log(this.state.editor.txt.html())
    let data = this.state.editor.txt.html()
    console.log(data)
    if (data === "<p>请输入内容</p>" || data === "<p><br></p>"){
      message.warning("请输入内容")
    } else {
      this.props.userPostedContent(data)
      this.state.editor.txt.html("<p>请输入内容</p>")
    }
    // console.log(this.props.state)
  }
}
const mapStateToProps = state => {
  return {
    state
  }
}
export default connect(mapStateToProps,{userPostedContent})(PostContent)