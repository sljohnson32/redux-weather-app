const app = (state = {lat: '', long: '', results: {}, location: {}}, action) => {
  switch (action.type) {
    case 'FETCH_LOCATION':
      return action.data;
    case 'FETCH_SUN':
      return Object.assign({...state}, action.time);
    case 'FETCH_WEATHER':
      return Object.assign({...state}, action.location);
    default:
      return state
  }
}

export default app;
