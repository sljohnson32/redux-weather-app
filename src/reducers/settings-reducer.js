const settings = (state = [], action) => {
  switch ('settings action', action.type) {
    case 'RECEIVE_FORECAST':
    return [...state, action.forecastData]
    case 'REMOVE_PIN':
    const indexNum = action.pinID;
    return [...state.slice(0, indexNum), ...state.slice(indexNum + 1)]
    default:
    return state;
  }
}

export default settings;
