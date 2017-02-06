import React from 'react';
import moment from 'moment';
import { Link } from 'react-router';
// import { connect } from 'react-redux';
import './header-style.css';

const Header = (props) => {
  let icon;
  let now = moment().format('HH:mm a')
  let sunrise = moment.parseZone(`${props.data.sunrise}`).local().format('HH:mm a')
  let morning = moment(sunrise, 'HH:mm a').add(2, 'h').format('HH:mm a')
  let sunset = moment.parseZone(`${props.data.sunset}`).local().format('HH:mm a')
  let evening = moment(sunset, 'HH:mm a').subtract(2, 'h').format('HH:mm a')
  let timeOfDay = {
    sunrise,
    morning,
    evening,
    // night
  }
  switch (true) {
    case (sunrise < now && now < morning):
      icon = <img src={require('./images/sunrise.png')} alt="icon of sunrise"/>
      break
    case (morning < now && now < evening):
      icon = <img src={require('./images/daytime.png')} alt="icon of sun"/>
      break
    case (evening < now && now < sunset):
      icon = <img src={require('./images/sunset.png')} alt="icon of sunset"/>
      break
    default:
      icon = <img src={require('./images/night.png')} alt="icon of moon"/>
  }

  return (
    <div className='header'>
      <h1>Weather</h1>
      <div className={timeOfDay.props}>
        {props.data.city  ?
          <div className='header-text-container'>
            <section className='header-icon'>
              <span className='icon'>{icon}</span>
              <p>{props.data.weather}</p>
            </section>
            <section className='header-overview'>
              <article>Current temperature for :
                <span className='city'>{props.data.city}: {props.data.temp_f}&#176;F</span> with {props.data.weather} skies.
                <div className='time-container'>
                  <p>Sunrise: {sunrise}, Sunset: {sunset}, Current Time: {now}</p>
                </div>
              </article>
            </section>
            <section className='header-ext-btn'>
              <Link to={'/forecast/' + props.data.city}>View extended forecast>>></Link>
            </section>
          </div>
           : <p>Please be patient while we get your weather!</p>}
      </div>
    </div>
  )
}

export default Header;
