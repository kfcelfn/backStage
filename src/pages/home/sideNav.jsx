import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import { Link, NavLink } from "react-router-dom";

const { SubMenu } = Menu;

export default class sideNav extends Component {
  render() {
    return (
      <div className='home_sideNav'>
        <Menu
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
            <NavLink to='/home/form' className='NavLink'>Form Elements</NavLink>
          </Menu.Item>
          <Menu.Item key="6">
            <Icon type="calendar" />
            <NavLink to='/home/chart' className='NavLink'>Chart</NavLink>
          </Menu.Item>
          <Menu.Item key="7">
            <Icon type="calendar" />
            <NavLink to='/home/table' className='NavLink'>Table</NavLink> 
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
                <NavLink to='/home/page' className='NavLink'>Blank Page</NavLink>
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