import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

export default class sideNav extends Component {
  handleClick = e => {
    console.log('click ', e);
  };

  render() {
    return (
      <div className='home_sideNav'>
        <Menu
          onClick={this.handleClick}
          defaultSelectedKeys={['6']}
          mode="inline"
          className='menus'
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
          <Menu.Item key="5">
            <Icon type="calendar" />
            <Link to='/home/form' className='link'>Form Elements</Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Icon type="calendar" />
            <Link to='/home/chart' className='link'>Chart</Link>
          </Menu.Item>
          <Menu.Item key="7">
            <Icon type="calendar" />
            <Link to='/home/table' className='link'>Table</Link> 
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
              <Menu.Item key="8">
                <Link to='/home/page' className='link'>Blank Page</Link>
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
