

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

export const fetchLocation = (data) => {
  return {
    type: 'FETCH_LOCATION',
    data
  }
};
