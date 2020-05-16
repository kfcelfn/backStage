import React, { Component } from 'react'
import { Input, Icon } from 'antd';
import { connect } from 'react-redux';
import logo from '@/assets/homeLogo.png'

const { Search } = Input;

export default @connect( state => {
  return{
    username: state.login.username 
  }
},{
})
class Header extends Component {
  render() {
    return (
      <div className='home_header'>
        <p><img src={logo} alt=""/></p>
        <h1>
          <Search
            placeholder="Search"
            onSearch={value => console.log(value)}
            style={{ width: 200 }}
          />
        </h1>
        <div>
          <span><Icon type="account-book" className='icn' /></span>
          <span><Icon type="account-book" className='icn'  /></span>
          <span><Icon type="account-book" className='icn'  /></span>
          <span>{this.props.username}</span>
          <span><Icon type="close-square" /></span>
        </div>
      </div>
    )
  }
}
