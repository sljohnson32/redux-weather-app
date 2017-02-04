import React, { Component } from 'react';
import './settings-style.css';
const { splitLocation, filterData } = require('../Helpers/ForecastHelpers');

export default class AddPin extends Component {
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
    const { text, receiveForecast } = this.props;
    const { cityInput } = this.state;
    return (
      <div>
        <p className='settings-p-tag'>Settings</p>
        <div className='container'>
        <input
          value={this.state.cityInput}
          onChange={ (e)=> this.setState({ cityInput: e.target.value })}
          placeholder='Enter a city'
        />
        <button
          className='search-btn'
          onClick={ () => this.getForecast(cityInput, receiveForecast) }
        >BUTTON</button>
        <div>{text}</div>
      </div>
      </div>
    )
  }
}
