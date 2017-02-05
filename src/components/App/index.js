import React, { Component } from 'react';
const { splitLocation, filterData } = require('../Helpers/ForecastHelpers.js');
import './app-style.css'
import moment from 'moment';

// import { connect } from 'react-redux';

import Header from '../Header';


export default class App extends Component {

  componentDidMount() {
    const { fetchLocation, fetchSun, fetchWeather } = this.props
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude
      const long = position.coords.longitude
      fetchLocation({lat, long});
      this.fetchSunAPI(lat, long, fetchSun);
      console.log(lat);
      this.fetchCurrentCity(lat, long, fetchWeather);
    })
  }

  fetchCurrentCity(lat, long, fetchWeather) {
    fetch(`http://api.wunderground.com/api/0b7e4bc2937ad616/geolookup/q/${lat},${long}.json`)
    .then((response) => response.json())
    .then((data) => this.getForecast(`${data.location.city}, ${data.location.state}`, fetchWeather))
  }

  fetchSunAPI(lat, long, fetchSun) {
    fetch(`http://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}&formatted=0`)
    .then((response) => response.json())
    .then((time) => this.filterTime(time))
    .then((cleanTime) => fetchSun(cleanTime))
  }
  // .then((data) => this.checkDaytime(data))

  filterTime(time){
    return{
      sunrise: time.results.sunrise,
      sunset: time.results.sunset
    }
  }

  getForecast(location, func) {
    fetch(`http://api.wunderground.com/api/0b7e4bc2937ad616/conditions/q/${splitLocation(location)}.json`)
    .then((response) => response.json())
    .then((data) => filterData(data))
    .then((cleanData) => func(cleanData))
  }


  render() {
    return (
      <div>

          <Header {...this.props}/>
          {this.props.children}
      </div>
    )
  }
}
