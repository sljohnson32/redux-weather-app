import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Header from '../Header';
import Settings from '../../containers/Settings';

const App = (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  )
}

export default App;
