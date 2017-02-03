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
              <p>{this.props.PinForecastData[0].temp_f}</p>
              <p>{this.props.PinForecastData[0].weather}</p></div>}</div>
              <div className='two'>{this.props.PinForecastData.length === 0 ? <p>loading........</p> : <div><p>{this.props.PinForecastData[1].fullName}</p>
              <p>{this.props.PinForecastData[1].temp_f}</p>
              <p>{this.props.PinForecastData[1].weather}</p></div>}</div>
              <div className='three'>{this.props.PinForecastData.length === 0 ? <p>loading........</p> : <div><p>{this.props.PinForecastData[2].fullName}</p>
              <p>{this.props.PinForecastData[2].temp_f}</p>
              <p>{this.props.PinForecastData[2].weather}</p></div>}</div>

          <button className='edit-btn'><Link to='/settings'>Edit Pinned Cities</Link></button>
        </div>
      </div>
    )
  }
}
