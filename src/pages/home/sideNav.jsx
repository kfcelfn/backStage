import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import { withRouter } from 'react-router-dom'

const { SubMenu } = Menu;

export default @withRouter 
class sideNav extends Component {
  onClick = e => {
    this.props.history.push(e.key)
  }
  
  render() {
    const { pathname } = this.props.location
    return (
      <div className='home_sideNav'>
        <Menu
          defaultSelectedKeys={[pathname]}
          selectedKeys={[pathname]}
          mode="inline"
          className='menus'
          onClick={this.onClick}
        >
          <Menu.Item key="1">
            <Icon type="mail" />
            Dashboard ( 2 new updates )
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <span>Basic UI Elements</span>
                <Icon type="mail" className='icons'/>
              </span>
            }
          >   
            <Menu.ItemGroup key="g1" title="Item 1">
              <Menu.Item key="2">Option 1</Menu.Item>
              <Menu.Item key="3">Option 2</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item key="4">
            <Icon type="calendar" />
            Icons
          </Menu.Item>
          <Menu.Item key="/home/form">
            <Icon type="calendar" />
            <span>Form Elements</span>
          </Menu.Item>
          <Menu.Item key="/home/echart">
            <Icon type="calendar" />
            <span>Chart</span>
          </Menu.Item>
          <Menu.Item key="/home/table">
            <Icon type="calendar" />
            <span>Table</span>
          </Menu.Item>
          <SubMenu
            key="sub2"
            title={
              <span>
                <span>Sample Pages</span>
                <Icon type="mail" className='iconss'/>
              </span>
            }
          >   
            <Menu.ItemGroup key="g1">
              <Menu.Item key="/home/page">
                <span>Blank Page</span>
              </Menu.Item>
              <Menu.Item key="9">Login</Menu.Item>
              <Menu.Item key="10">Register</Menu.Item>
              <Menu.Item key="11">404</Menu.Item>
              <Menu.Item key="12">500</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}
