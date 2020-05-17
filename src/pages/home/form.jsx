import React, { Component } from 'react'
import { Form, Input, Button, message, Upload, Icon } from 'antd';
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
  state = {
    imgUrl: ''
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        values.hospital = `/${this.state.imgUrl}`
        console.log(values)
        this.props.addUser(values)
          .then( res => {
            message.success('添加成功');
            // this.props.history.push('/home/table')
          })
      }
    })
  }

  handleReset = () => {
    this.props.form.resetFields();
  }
  
  render() {
    const { getFieldDecorator } = this.props.form;
    const _this = this

    const props = {
      name: 'file',
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info) {
        if (info.file.status === 'done') {
          message.success(`上传成功`);
          console.log(info)
          _this.setState({imgUrl: info.file.name})

        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    }

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
          <Form.Item label="Upload">
            <Upload {...props}>
              <Button>
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>
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
