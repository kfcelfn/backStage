import React, { Component } from 'react'
import { Switch, Route,Redirect } from "react-router-dom";
import './styles.less'
import Header from './header'
import SideNav from './sideNav'
import Chart from './chart'
import Page from './page'
import Form from './form'
import Table from './table'

export default class Home extends Component {
  render() {
    return (
      <div className='page_home'>
        <Header />
        <section>
          <SideNav />
          <div className='home_main'>
            <Switch>
              <Route path='/home/echart' component={Chart}/>     
              <Route path='/home/page' component={Page}/>      
              <Route path='/home/form' component={Form}/>     
              <Route path='/home/table' component={Table}/>
              <Redirect to='/home/echart' />     
            </Switch>
          </div>
        </section>
      </div>
    )
  }
}
