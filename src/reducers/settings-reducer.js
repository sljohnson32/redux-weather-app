const settings = (state = [], action) => {
  switch ('settings action', action.type) {
    case 'RECEIVE_FORECAST':
      return [...state, action.forecastData]
    default:
      return state;
  }
}

export default settings;
