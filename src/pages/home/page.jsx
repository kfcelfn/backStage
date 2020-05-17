import React, { Component } from 'react'
import { connect } from 'react-redux';
import { limitPage } from '@/actions/home'

export default @connect( state  => { 
  return {
    limitData: state.home.limitPage
  } 
},{
  limitPage 
})
class Page extends Component {

  componentDidMount () {
    this.props.limitPage({page: 1})
  }
  render() {
    console.log(this.props.limitData)
    return (
      <div>
        Page
      </div>
    )
  }
}
