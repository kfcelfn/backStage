import React, { Component } from 'react'
import './styles.less'
import Header from './header'
import SideNav from './sideNav'
import Main from './main'

export default class Home extends Component {
  render() {
    return (
      <div className='page_home'>
        <Header />
        <section>
          <SideNav />
          <Main />
        </section>
      </div>
    )
  }
}
