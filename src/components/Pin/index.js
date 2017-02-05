import React, { Component } from 'react';
import { Link } from 'react-router';
const { splitLocation, filterExtData } = require('../Helpers/ForecastHelpers');

export default class Pin extends Component {

  getExtended(location) {
    fetch(`http://api.wunderground.com/api/0b7e4bc2937ad616/forecast10day/q/${splitLocation(location)}.json`)
    .then((response) => response.json())
    .then((data) => filterExtData(data))
    .then((cleanData) => this.props.receiveExtForecast(cleanData, location));
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        <div className='pin-container'>
          <p className='card-city'>{data.fullName}</p>
          <p className='card-temp'>{data.temp_f}</p>
          <p className='card-sky'>{data.weather}</p>
          <button
            onClick={ () => this.getExtended(data.fullName) }
          ><Link to={'/' + data.city}>View extended forecast>>></Link></button>
        </div>
      </div>
    )
  }
}
