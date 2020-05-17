import React, { Component } from 'react'
import { Table, Button } from 'antd';
import { connect } from 'react-redux';
import { findUser } from '@/actions/home'

export default @connect( state  => { 
  return {
    findUsers: state.home.findUser
  } 
},{
  findUser 
})
class extends Component {

  componentDidMount () {
    this.props.findUser() 
  }

  addUser = () => {
    this.props.history.push('/home/form')
  }

  render() {
    const { findUsers } = this.props
    const columns = [
      {
        title: 'User',
        dataIndex: 'hospital',
        key: 'hospital',
        render: text => (
          <a className='imgs'><img src={text} /></a>
        ),
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Price',
        key: 'msg',
        dataIndex: 'msg'
      },
      {
        title: 'DeadLine',
        key: 'action',
        render: text => (
          <span>
            <a>edit</a>{" "}
            <a>Delete</a>
          </span>
        ),
      },
    ];
    const pagination = {
      pageSize: 5,
      total: this.props.findUsers.length
    }

    return (
      <div className='main_table'>
        <h1>Striped Table</h1>
        <h2>
          Add class .table-striped  <Button type="primary" onClick={this.addUser}>Add User</Button>
        </h2>
        <Table 
          rowKey='id'
          columns={columns} 
          dataSource={findUsers}
          pagination = {pagination}
        />
      </div>
    )
  }
}
