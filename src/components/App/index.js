import React, { Component } from 'react';
import './app-style.css'
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
      this.fetchCurrentCity(lat, long, fetchWeather);
    })
  }

  fetchCurrentCity(lat, long, fetchWeather) {
    fetch(`http://api.wunderground.com/api/0b7e4bc2937ad616/geolookup/q/${lat},${long}.json`)
    .then((response) => response.json())
    .then((data) => this.getForecast(`${data.location.city}, ${data.location.state}`, fetchWeather))
  }

  fetchSunAPI(lat, long, fetchSun) {
    fetch(`http://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}`)
    .then((response) => response.json())
    .then((data) => fetchSun(data))
  }

  //MOVE TO HELPER FUNCTION
  splitLocation(location) {
    let array = location.split(',');
    let city = array[0];
    let state = array[1].toString().split(' ').join('_');
    return `${state}/${city}`;
  }
  getForecast(location, func) {
    fetch(`http://api.wunderground.com/api/0b7e4bc2937ad616/conditions/q/${this.splitLocation(location)}.json`)
    .then((response) => response.json())
    .then((data) => func(data))
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
