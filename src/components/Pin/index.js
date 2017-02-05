import React, { Component } from 'react';

export default class Pin extends Component {

  render() {
    const { data } = this.props;
    return (
      <div>
        <div className='pin-container'>
          <p className='card-city'>{data.fullName}</p>
          <p className='card-temp'>{data.temp_f}</p>
          <p className='card-sky'>{data.weather}</p>
          <button>View extended forecast>>></button>
        </div>
      </div>
    )
  }
}
