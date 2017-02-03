import React, { Component } from 'react';
import SettingsCity from '../SettingsCity'
import './settings-style.css'

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state= {
      cityInput: ''
    }
  }

  splitLocation(location) {
    let array = location.split(',');
    let city = array[0];
    let state = array[1].toString().split(' ').join('_');
    return `${state}/${city}`;
  }

  filterData(data) {
    return {
      city: data.current_observation.display_location.city ,
      state: data.current_observation.display_location.state,
      fullName: data.current_observation.display_location.full,
      localTime: data.current_observation.local_time_rfc822,
      weather: data.current_observation.weather,
      temp_f: data.current_observation.temp_f,
      temp_c: data.current_observation.temp_c,
      humidity: data.current_observation.relative_humidity,
      wind_string: data.current_observation.wind_string,
      wind_dir: data.current_observation.wind_dir,
      wind_mph: data.current_observation.wind_mph,
      icon_url: data.current_observation.icon_url
    }
  }

  getForecast(location, func) {
    fetch(`http://api.wunderground.com/api/0b7e4bc2937ad616/conditions/q/${this.splitLocation(location)}.json`)
    .then((response) => response.json())
    .then((data) => this.filterData(data))
    .then((cleanData) => func(cleanData))
  }

  render() {
    const { data, receiveForecast } = this.props;
    const { cityInput } = this.state;
    return (
      <div>
        <p className='settings-p-tag'>Settings</p>
        {data.fullName}
        <div className='container'>
          {data.map((city, i) => {
            return <SettingsCity key={ i } data={city} />
          })}
          <input
            value={this.state.cityInput}
            onChange={ (e)=> this.setState({ cityInput: e.target.value })}
            placeholder='Enter a city'
          />
          <button
            className='search-btn'
            onClick={ () => this.getForecast(cityInput, receiveForecast) }
          >Add New City</button>
        </div>
      </div>
    )
  }
}
