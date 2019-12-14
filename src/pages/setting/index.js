import React, { Component } from "react"
import {connect} from "react-redux"
import {getColor,getBack,getSize,getFont} from "../setting/reducer/setting.redux"
import { Collapse, Select, Button, Modal, Switch, Slider, InputNumber, Row, Col,Input, Upload, Icon, message } from 'antd'
const { Panel } = Collapse
const { Option } = Select
const { confirm } = Modal
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}
function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}
class Setting extends Component {
  state = { 
    visible: false,
    inputValue: 1,
    disabled: false,
    color:"",
    loading: false,
    fontsize:''
  };
  optionValue = e=>{
     console.log(e)
     this.setState({
       fontstyle:e
     })
     this.props.getFont(this.state.fontstyle)
    localStorage.setItem("size",this.state.fontstyle)
  }
  optionfontValue = e=>{
    this.setState({
      fontsize:e
    })
    this.props.getSize(this.state.fontsize)
    localStorage.setItem("size",this.state.fontsize)
 }
  handleChange = info => {
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        })
      ); 
      this.props.getBack(this.state.imageUrl)
      localStorage.setItem("imgurl",this.state.imageUrl)
  };
  handleDisabledChange = disabled => {
    this.setState({ disabled });
  }
  onChange = value => {
    this.setState({
      inputValue: value,
    });
  };
  ChangeColor = (e)=>{
     this.props.getColor(e.target.value)
     localStorage.setItem("color",e.target.value)
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = e => {
    this.setState({
      visible: false,
    });
  };
  handleCancel = e => {
    // console.log(e);
    this.setState({
      visible: false,
    });
  };
  render() {
    const { disabled, imageUrl} = this.state
    function showDeleteConfirm() {
      confirm({
        title: '确定要恢复样式吗?',
        content: '确定可就没有了！',
        okText: '确认',
        okType: 'danger',
        cancelText: '取消',
        onOk() {
          localStorage.setItem("color","")
          localStorage.setItem("imgurl","")
          localStorage.setItem("size","")
          localStorage.setItem("fontstyle","")
          window.location.reload()
        },
        onCancel() {
        },
      });
    }
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    )
    return (
      <Collapse bordered={false} defaultActiveKey={['1']}  style={{fontSize:localStorage.getItem('size')}}>
        <Panel header="字体设置" key="1">
          <div style={{ width: 130, float: "left", height: "24px", lineHeight: "24px" }}>字体大小 : </div>
          <Select defaultValue="16px" style={{ width: 120, float: "left" , margin:" 0 10px"}} onSelect={this.optionfontValue} >
            
            <Option value="24px">大</Option>
            <Option value="16px">中</Option>
            <Option value="10px">小</Option>
          </Select>
          <div>
          <Button onClick={this.showModal}>字体选择..</Button>
          <Modal
          title="字体："
          okText="确认"
          cancelText="取消"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
              <Select
                showSearch
                onSelect={this.optionValue}
                style={{ width: 200 }}
                placeholder="字体选择.."
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="宋体">宋体</Option>
                <Option value="黑体">黑体</Option>
                <Option value="楷体">楷体</Option>
                <Option value="新宋体">青春无限体</Option>
              </Select>
        </Modal>
        </div>
        </Panel>

        <Panel header="声音设置" key="2">
        <div style={{ width: 90, float: "left", height: "30px", lineHeight: "30px" }}>声音 : </div>
        <Switch size="small" checked={disabled} onChange={this.handleDisabledChange} />
        <Row>
        <Col span={12}>
          <Slider
            min={1}
            max={100}
            onChange={this.onChange}
            value={typeof this.state.inputValue === 'number' ? this.state.inputValue : 0}
            disabled={!disabled}
          />
        </Col> 
        <Col span={4}>
          <InputNumber
            min={1}
            max={100}
            style={{ marginLeft: 16 }}
            value={this.state.inputValue}
            onChange={this.onChange}
          />
        </Col>
      </Row>
        </Panel>
        <Panel header="颜色设置" key="3">
        <div style={{ width: 90, float: "left", height: "30px", lineHeight: "30px" }}>主题颜色: </div>
        <Input type="color"   onChange={this.ChangeColor}/>
        </Panel>
        <Panel header="背景设置" key="4">
        <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
  
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
     
        </Panel>

        <Panel header="恢复样式" key="5">
        <Button onClick={showDeleteConfirm} type="dashed">
        恢复默认设置
        </Button>
        </Panel>
      
      </Collapse>

    )
  }
}

const mapStateToProps = state =>{
  return{
    content : state.colorStore
  }
}


export default connect(mapStateToProps,{getColor,getBack,getSize,getFont})(Setting)