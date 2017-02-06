import React from 'react';
import moment from 'moment';
// import { connect } from 'react-redux';
import './header-style.css';

const Header = (props) => {
  let icon = <img alt='time of day'/>
  let now = moment().format('h:mm a')
  let sunrise = moment.parseZone(`${props.data.sunrise}`).local().format('h:mm a')
  console.log(sunrise);
  let morning = moment(sunrise, 'h:mm a').add(2, 'h').format('h:mm a')
  console.log(morning);
  let sunset = moment.parseZone(`${props.data.sunset}`).local().format('h:mm a')
  let evening = moment(sunset, 'h:mm a').subtract(2, 'h').format('h:mm a')
  let timeOfDay = {
    sunrise,
    morning,
    evening,
    // night
  }
  switch (true) {
    case (sunrise < now && now < morning):
      icon = <img src={require('./images/sunrise.png')} alt="icon of sunrise"/>
      break;
    case (morning < now && now < evening):
      icon = <img src={require('./images/daytime.png')} alt="icon of sun"/>
      break;
    case (evening < now && now < sunset):
      icon = <img src={require('./images/sunset.png')} alt="icon of sunset"/>
      break;
    default:
      icon = <img src={require('./images/night.png')} alt="icon of moon"/>

  }

  return (
    <div className='header'>
      <h1>Weather</h1>
      <div className={timeOfDay.props}>
        {props.data.city  ?
          <div className='header-text-container'>
            <p>Current temperature for :
              <span className='city'>{props.data.city}: {props.data.temp_f}&#176;F</span> with {props.data.weather} skies.
              <div className='time-container'>
                Sunrise: {sunrise}, Sunset: {sunset}, Current Time: {now}  <p className='icon'>{icon}</p>
              </div>
            </p>
          </div>
           : <p>Please be patient while we get your weather!</p>}
      </div>


    </div>
  )
}

export default Header;
