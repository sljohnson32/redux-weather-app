import React from 'react';
import moment from 'moment';
// import { connect } from 'react-redux';
import './header-style.css';

const Header = (props) => {
  // console.log(props);
  // let now = moment().format('HH:mm:ss')
  // let sunrise = moment.parseZone(`${props.sunrise}`).local().format('HH:mm:ss')
  // let morning = moment(sunrise, 'HH:mm:ss').add(2, 'h').format('HH:mm:ss')
  // let sunset = moment.parseZone(`${props.sunset}`).local().format('HH:mm:ss')
  // let evening = moment(sunset, 'HH:mm:ss').subtract(2, 'h').format('HH:mm:ss')
  // switch (true) {
  //   case (sunrise < now && now < morning):
  //     message = "Wakey wakey!"
  //     break;
  //   case (morning < now && now < evening):
  //     message = "Work time!"
  //     break;
  //   case (evening < now && now < sunset):
  //     message = "Have you eaten yet?"
  //     break;
  //   default:
  //     message = "Maybe go to bed"
  //
  // }
  // console.log(sunrise, morning, evening, sunset);

  return (
    <div className='header'>
      <h1>Weather</h1>
      <div className='header-container'>
        {props.data.city  ?
          <div className='header-text-container'>
          <p className='current'>Current temperature for <span className='city'>{props.data.city}: {props.data.temp_f}&#176;F</span> </p>
        </div>
           : <p>Please be patient while we get your weather!</p>}
      </div>


    </div>
  )
}

export default Header;
