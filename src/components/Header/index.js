import React from 'react';
// import { connect } from 'react-redux';
import './header-style.css';

const Header = (props) => {
  // debugger
  // console.log('props-lat&long', props.data.results)
  return (
    <div className='header'>
      <h1>Weather</h1>
      <div className='header-container'>
        {props.data.city  ?
          <div className='header-text-container'>
          <p className='current'>Current temperature for <p className='city'>{props.data.city}: {props.data.temp_f}&#176;F</p> </p>
        </div>
           : <p>not loaded yet!</p>}
      </div>


    </div>
  )
}

export default Header;
