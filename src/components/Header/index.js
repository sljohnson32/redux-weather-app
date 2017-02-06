import React from 'react';
import moment from 'moment';
// import { connect } from 'react-redux';
import './header-style.css';

const Header = (props) => {
  let icon = <img alt='time of day'/>
  const now = moment().format('HH:mm:ss')
  const sunrise = moment.parseZone(`${props.data.sunrise}`).local().format('HH:mm:ss');
  console.log(sunrise);
  const morning = moment(sunrise, 'HH:mm:ss').add(2, 'h').format('HH:mm:ss')
  console.log(morning);
  const sunset = moment.parseZone(`${props.data.sunset}`).local().format('HH:mm:ss')
  const evening = moment(sunset, 'HH:mm:ss').subtract(2, 'h').format('HH:mm:ss')
  // let timeOfDay = {
  //   sunrise: sunrise,
  //   morning: morning,
  //   evening: evening,
  //   // night
  // }
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
      <div>
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
