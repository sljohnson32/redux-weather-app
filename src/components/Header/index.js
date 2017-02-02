import React from 'react';
// import { connect } from 'react-redux';
import './header-style.css';

const Header = (props) => {
  console.log('props-lat&long', props.data.current_observation)
  return (
    <div className='header'>
      <h1>Weather</h1>
      <div className='header-container'>
        {/* <p>{props.data.lat}</p> */}
        {props.data.current_observation  ?
          <div className='header-text-container'>
          <p className='current'>Current forecast for <p className='city'>{props.data.current_observation.display_location.city}</p>: </p>
        </div>
           : <p>not loaded yet!</p>}
      </div>


    </div>
  )
}

export default Header;
