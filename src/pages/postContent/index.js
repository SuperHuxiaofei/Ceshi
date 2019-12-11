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
      editorContent: '',
      update:false,
      editor:'',
      elem:''
    }
  }
  render() {
    return (
      // <div>postContent</div>
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
      console.log(this.state.editor)
      this.state.editor.customConfig.onchange = html => {
        console.log(html)
        this.setState({
          editorContent: html,
          editor:this.state.editor
        })
      }
    })
  }

  clickHandle() {
    this.setState({
      update:true
    })
  }
  shouldComponentUpdate(){
    return this.state.update
  }
  componentDidUpdate(){
    console.log(this.props.state)
  }
}
const mapStateToProps = state => {
  return {
    state
  }
}
export default connect(mapStateToProps,{userPostedContent})(PostContent)