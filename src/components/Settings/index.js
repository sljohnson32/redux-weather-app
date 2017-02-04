import React, { Component } from 'react';
import SettingsCity from '../SettingsCity'
const { splitLocation, filterData } = require('../Helpers/ForecastHelpers');
import './settings-style.css'

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state= {
      cityInput: ''
    }
  }

  getForecast(location, func) {
    fetch(`http://api.wunderground.com/api/0b7e4bc2937ad616/conditions/q/${splitLocation(location)}.json`)
    .then((response) => response.json())
    .then((data) => filterData(data))
    .then((cleanData) => func(cleanData))
  }

  render() {
    const { data, receiveForecast, removePin } = this.props;
    const { cityInput } = this.state;
    let disableBtn = data.length > 2;
    return (
      <div>
        <p className='settings-p-tag'>Settings</p>
        {data.fullName}
        <div className='container'>
          {data.map((city, i) => {
            return <SettingsCity key={ i } pinID={i} data={city} removePin={removePin} />
          })}
          <input
            value={this.state.cityInput}
            onChange={ (e)=> this.setState({ cityInput: e.target.value })}
            placeholder='Enter a city'
          />
          <button
            className='search-btn'
            disabled={disableBtn}
            onClick={ () => this.getForecast(cityInput, receiveForecast) }
          >Add New City</button>
        </div>
      </div>
    )
  }
}
