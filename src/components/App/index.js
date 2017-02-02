import React, { Component } from 'react';
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
    .then((data) => fetchWeather(data))
  }

  fetchSunAPI(lat, long, fetchSun) {
    fetch(`http://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}`)
    .then((response) => response.json())
    .then((data) => fetchSun(data))
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
}
