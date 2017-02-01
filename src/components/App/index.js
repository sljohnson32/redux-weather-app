import React, { Component } from 'react';
// import { connect } from 'react-redux';

import Header from '../Header';


export default class App extends Component {

  componentDidMount() {
    const { fetchLocation } = this.props
    navigator.geolocation.getCurrentPosition( (position) => {
      fetchLocation({ lat: position.coords.latitude, long: position.coords.longitude})
    });
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
