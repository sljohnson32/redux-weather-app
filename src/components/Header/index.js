import React from 'react';
import moment from 'moment';
// import { connect } from 'react-redux';
import './header-style.css';

const Header = (props) => {
  let message = ''
  let now = moment().format('HH:mm:ss')
  let sunrise = moment.parseZone(`${props.data.sunrise}`).local().format('HH:mm:ss')
  let morning = moment(sunrise, 'HH:mm:ss').add(2, 'h').format('HH:mm:ss')
  let sunset = moment.parseZone(`${props.data.sunset}`).local().format('HH:mm:ss')
  let evening = moment(sunset, 'HH:mm:ss').subtract(2, 'h').format('HH:mm:ss')
  let timeOfDay = {
    sunrise,
    morning,
    evening,
    // night
  }
  switch (true) {
    case (sunrise < now && now < morning):
      message = "Wakey wakey!"
      break;
    case (morning < now && now < evening):
      message = "Work time!"
      break;
    case (evening < now && now < sunset):
      timeOfDay.props = evening;
      message = "Have you eaten yet?"
      break;
    default:
      // timeOfDay.props.time = night;
      message = "Maybe go to bed"

  }

  return (
    <div className='header'>
      <h1>Weather</h1>
      <div className={timeOfDay.props}>
        {props.data.city  ?
          <div className='header-text-container'>
            <p>Current temperature for :
              <span className='city'>{props.data.city}: {props.data.temp_f}&#176;F</span>
              <div className='time-container'>
                Sunrise: {sunrise}, Sunset: {sunset}, Current Time: {now}  <p>{message}</p>
              </div>
            </p>
          </div>
           : <p>Please be patient while we get your weather!</p>}
      </div>


    </div>
  )
}

export default Header;
