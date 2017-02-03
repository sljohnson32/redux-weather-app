import React, { Component } from 'react';
import { Link } from 'react-router';
import './pinbox-style.css'
// import { connect } from 'react-redux';
export default class PinBox extends Component {
  render() {
    console.log('pinbox-props', this.props.PinForecastData[0])
    // debugger
    return (
      <div className='pinbox-container'>
        <p className='pinbox-title'>Favorites</p>
        <div className='card-container'>
              <div className='one'>{this.props.PinForecastData.length === 0 ? <p>loading........</p> : <div><p>{this.props.PinForecastData[0].fullName}</p>
              <p>{this.props.PinForecastData[0].temp_f}</p></div>}</div>
              <div className='two'></div>
              <div className='three'></div>

          <button className='edit-btn'><Link to='/settings'>Edit Pinned Cities</Link></button>
        </div>
      </div>
    )
  }
}
