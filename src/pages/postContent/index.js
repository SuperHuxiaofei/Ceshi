import React,{Component} from "react"
import E from 'wangeditor'

class PostContent extends Component {
  constructor(props,context){
    super(props,context)
    this.state = {
      editorContent: ''
    }
  }
  render(){
    // console.log(this.props)
    return (
      // <div>postContent</div>
      <div>
        {/* 将生成编辑器 */}
        <div ref="editorElem" style={{textAlign: 'left', width: 'auto',minWidth:750, margin: '10px auto'}}></div>
        <button onClick={this.clickHandle.bind(this)}>提交</button>
      </div>
    )
  }
  componentDidMount() {
    const elem = this.refs.editorElem
    const editor = new E(elem)
    // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
    editor.customConfig.onchange = html => {
      this.setState({
        editorContent: html
      })
    }
    editor.create()
  }
 
  clickHandle() {
      console.log(this.state.editorContent)
  }
}
export default PostContent