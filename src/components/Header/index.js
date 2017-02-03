import React from 'react';
// import { connect } from 'react-redux';
import './header-style.css';

const Header = (props) => {
  return (
    <div className='header'>
      <h1>Weather</h1>
      <div className='header-container'>
        {props.data.city  ?
          <div className='header-text-container'>
            <img className='icon' src={props.data.icon_url} />
          <p className='current'>Current temperature for <p className='city'>{props.data.city}: {props.data.temp_f}&#176;F</p> </p>
        </div>
           : <p>Please be patient while we get your weather!</p>}
      </div>


    </div>
  )
}

export default Header;
