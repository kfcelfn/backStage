import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Demo, Login, Reg, Home } from './assembly';

import '@/utils/reset.css'  
import '@/utils/rem'
import '@/index.less';


export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch> 
          <Route path='/demo' component={Demo}/>     
          <Route path='/login' component={Login}/>     
          <Route path='/home' component={Home}/>     
          <Route path='/' component={Reg}/>     
        </Switch>
      </BrowserRouter>
    )
  }
}
