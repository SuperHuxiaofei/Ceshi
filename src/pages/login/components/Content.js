import React,{Component,Fragment} from "react"
import { Form, Icon, Input, Button, Checkbox } from 'antd'

import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import {setUserInfo}  from "../reducer"

class LoginContent extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.setUserInfo(values)
        this.props.history.push("/admin/homepage")
      }
    });
  };
  render(){
    const { getFieldDecorator } = this.props.form;
    return (
      <Fragment>
          <div className="login-box">
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                  />,
                )}
              </Form.Item>
              <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>记住</Checkbox>)}
              <a className="login-form-forgot" href="">
                忘记密码
              </a>
              <Button type="primary" htmlType="submit" block className="login-form-button">
                登录
              </Button>
              Or <a href="">现在注册</a>
            </Form.Item>
          </Form>
        </div>
      </Fragment>
    )
  }
}
//
const mapStateToProps = (state) => {
  return state.login
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(LoginContent);
const mapStatetoProps = (state) =>({
    login : state.login
})
export default connect(mapStatetoProps,{setUserInfo})(withRouter(WrappedNormalLoginForm))
