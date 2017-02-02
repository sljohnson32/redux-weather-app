import React, { Component } from 'react';
// import { connect } from 'react-redux';

import Header from '../Header';


export default class App extends Component {

  componentDidMount() {

    const { fetchLocation, fetchSun } = this.props
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude
      const long = position.coords.longitude
      fetchLocation({lat, long});
      fetch(`http://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}`)
      .then((response) => response.json())
      .then((data) => fetchSun(data))
    })

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
