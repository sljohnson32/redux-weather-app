const settings = (state = [], action) => {
  switch ('settings action', action.type) {
    case 'RECEIVE_FORECAST':
      let newData = action.forecastData;
      state.push(newData);
      return state;
    default:
      return state;
  }
}

export default settings;
