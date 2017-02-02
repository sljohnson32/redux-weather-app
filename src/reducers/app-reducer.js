const app = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_LOCATION':
      return [action.data];
    case 'FETCH_SUN':
      return [...state, action.time];
    default:
      return state
  }
}

export default app;
