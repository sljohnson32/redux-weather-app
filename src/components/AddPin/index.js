import React, { Component } from 'react';
const { splitLocation, filterData } = require('../Helpers/ForecastHelpers');
import '../Settings/settings-style.css'

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
    const { data, receiveForecast } = this.props;
    const { cityInput } = this.state;
    let disableBtn = data.length > 2;
    return (
      <div>
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
    )
  }
}
