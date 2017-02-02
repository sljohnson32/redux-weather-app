import React from 'react';
// import { connect } from 'react-redux';

const Header = (props) => {
  console.log('props-lat&long', props.data.current_observation)
  return (
    <div>
      <h1>Header</h1>
      <p>{props.data.lat}</p>
      {props.data.current_observation ? <p>{props.data.current_observation.display_location.city}</p> : <p>not loaded yet!</p>}

    </div>
  )
}

export default Header;
