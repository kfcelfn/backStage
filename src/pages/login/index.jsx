import React, { Component } from 'react'
import {
  Form,
  Input,
  Button,
} from 'antd';
import './styles.less'

export default @Form.create()
class Login extends Component {

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className='page_login'>
        <section>
           <Form onSubmit={this.handleSubmit}>
            <Form.Item>
              <h1 className='title'>SIGN UP</h1>
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your name!',
                  },
                ],
              })(<Input placeholder='NAME' className='inp'/>)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('pwd', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                  {
                    validator: this.validateToNextPassword,
                  },
                ],
              })(<Input.Password placeholder='PASSWORD'/>)}
            </Form.Item>
            <Form.Item >
              <span>Already registerd? <a href="#">Sign In</a></span>
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" className='btn'>
                Sign Up
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    )
  }
}
