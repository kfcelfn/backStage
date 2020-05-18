import React, { Component } from 'react'
import { Form, Input, Button, message, Upload, Icon } from 'antd';
import { connect } from 'react-redux';
import { addUser } from '@/actions/home'

export default @connect(state  => {return {}},{
  addUser 
})

@Form.create()
class extends Component {

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const imgs = `/${values.hospital[0].name}`
        values.hospital = imgs
        this.props.addUser(values)
          .then( () => {
            message.success('添加成功');
            this.props.history.push('/home/table')
          })
      }
    })
  }

  handleReset = () => {
    this.props.form.resetFields();
  }

  normFile = e => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  
  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className='home_form'>
        <h1>Basic Form</h1>
        <h2>Basic form elements</h2>
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
          <Form.Item label="Upload">
            {getFieldDecorator('hospital', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
            })(
              <Upload name="logo" action="https://www.mocky.io/v2/5cc8019d300000980a055e76" listType="picture">
                <Button>
                  <Icon type="upload" /> Click to upload
                </Button>
              </Upload>,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
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
