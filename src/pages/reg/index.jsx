import React, { Component } from 'react'
import { Form, Input, Button, message } from 'antd';
import { connect } from 'react-redux';
import { userReg } from '@/actions/login'
import './styles.less'

export default @connect( () => { return {} },{
  userReg 
})

@Form.create()
class Reg extends Component {
  state = {
    autoCompleteResult: [],
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.userReg(values)
          .then( res => {
            if( res.payload.status == 200){
              message.success('注册成功');
              this.props.history.push('/login')
            }else{
              message.error('账户已存在');
            }
          })
      }
    });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('pwd')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className='page_reg'>
        <section>
           <Form onSubmit={this.handleSubmit}>
            <Form.Item>
              <h1 className='title'>SIGN UP</h1>
            </Form.Item>
            <Form.Item >
             <p>Your info has been saved.</p>
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
            <Form.Item>
              {getFieldDecorator('confirm', {
                rules: [
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  {
                    validator: this.compareToFirstPassword,
                  },
                ],
              })(<Input.Password onBlur={this.handleConfirmBlur}  placeholder='RE-TYPE PASSWORD' />)}
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
