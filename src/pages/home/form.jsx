import React, { Component } from 'react'
import { Form, Input, Button, message } from 'antd';
import { connect } from 'react-redux';
import { addUser } from '@/actions/home'

export default @connect( state  => { 
  return {
    
  } 
},{
  addUser 
})

@Form.create()
class extends Component {

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log(values);
        this.props.addUser(values)
          .then( res => {
            message.success('添加成功');
            this.props.history.push('/home/table')
          })
      }
    })
  }

  handleReset = () => {
    this.props.form.resetFields();
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className='home_form'>
        <h1>Basic Form</h1>
        <h2>Basic form elements</h2>
        <p>Name</p>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item label="Name">
            {getFieldDecorator('name', {
              rules: [
                {
                  required: true,
                  message: 'Please input your name',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Age">
            {getFieldDecorator('age', {
              rules: [
                {
                  required: true,
                  message: 'Please input your age',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Price">
            {getFieldDecorator('price', {
              rules: [
                {
                  required: true,
                  message: 'Please input your Pirce',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              Clear
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}
