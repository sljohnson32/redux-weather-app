// export const RECEIVE_FORECAST = 'RECEIVE_FORECAST';
export const ADD_PIN = 'ADD_PIN';

// export const receiveForecast = (forecastData) => ({
//   // action object
// });
//
// export const fetchForecast = options => dispatch => {
//   // return fetch API call
// };

export const addPin = (text) => {
  return {
    type: ADD_PIN,
    text
  }
}
