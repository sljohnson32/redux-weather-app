

// export const receiveForecast = (forecastData) => ({
//   // action object
// });
//
// export const fetchForecast = options => dispatch => {
//   // return fetch API call
// };

export const addPin = (text) => {
  return {
    type: 'ADD_PIN',
    text
  }
}
// const fetchLocationApi = () => {
  // return (dispatch) => {
  // api call
  // from that response you'll dispatch(fetchLoaction(data))
//}
//}
export const fetchLocation = (data) => {
  return {
    type: 'FETCH_LOCATION',
    data
  }
};

export const fetchSun = (time) => {
  return {
    type: 'FETCH_SUN',
    time
  }
}

export const fetchWeather = (location) => {
  return {
    type: 'FETCH_WEATHER',
    location
  }
}
