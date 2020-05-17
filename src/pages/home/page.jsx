import React, { Component } from 'react'
import { Pagination } from 'antd';
import { connect } from 'react-redux';
import { limitPage } from '@/actions/home'

export default @connect( state  => { 
  return {
    limitData: state.home.limitPage,
    total: state.home.total
  } 
},{
  limitPage 
})

class extends Component {

  componentDidMount () {
    this.props.limitPage({page: 1, limit: 6})
  }

  onChange = current => {
    this.props.limitPage({page: current, limit: 6})
  }

  render() {
    const { limitData, total } = this.props
    return (
      <div className="home_page">
        {
          limitData.map( item => {
            return (
              <div key={item.id} className='main'>
                <h1>{item.title}</h1>
                <p>{item.tags}</p>
              </div>
            )
          }) 
        }
        <Pagination 
          defaultCurrent={1} 
          total={+total}
          onChange = {this.onChange} 
        />
      </div>
    )
  }
}
