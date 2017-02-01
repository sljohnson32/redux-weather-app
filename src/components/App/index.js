import React, { Component } from 'react';
// import { connect } from 'react-redux';

import Header from '../Header';


export default class App extends Component {

  componentDidMount() {
    // console.log(this.props)
    // console.log(this.props)
    // const { fetchLocation } = this.props
    // fetchLocation()
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
