import React, { Component } from 'react';
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

  filterData(data){
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
    .then((data) => func(data))
  }

  checkDaytime() {
    let sunrise = moment.parseZone(`${this.props.sunrise.sunrise}`).local().format('HH:mm:ss')
     let now = moment().format('HH:mm:ss')
     let sunset = moment.parseZone(`${this.props.sunrise.sunset}`).local().format('HH:mm:ss')
     if (now > sunrise && now < sunset){console.log("It's fuckin' daytime, baby!")}
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
