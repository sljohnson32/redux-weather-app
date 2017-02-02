const app = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_LOCATION':
      return [action.data];
    case 'FETCH_SUN':
      return [...state, action.time];
    case 'FETCH_WEATHER':
      return [...state, action.location];
    default:
      return state
  }
}

export default app;
