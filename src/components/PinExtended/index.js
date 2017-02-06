import React from 'react';
// import { connect } from 'react-redux';

const PinExtended = (props) => {
  let data = props.PinForecastData.find(data => {
    return data.city === props.params.city;
  })
  return (
    <div>{data.extForecast[0].text}</div>
    )
}

export default PinExtended;
