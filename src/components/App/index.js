import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import Settings from '../Settings';

const App = () => {
  return (
    <div>
      <Header />
      <Settings />
    </div>
  )
}

export default App;
