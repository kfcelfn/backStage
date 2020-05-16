import React, { Component } from 'react'
import { Table, Divider } from 'antd';
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
  render() {
    const { findUsers } = this.props
    console.log(findUsers)
    const columns = [
      {
        title: 'User',
        dataIndex: 'hospital',
        key: 'hospital'
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

    return (
      <div className='main_table'>
        <Table columns={columns} dataSource={findUsers} rowKey='id' pagination = {false}/>
      </div>
    )
  }
}
