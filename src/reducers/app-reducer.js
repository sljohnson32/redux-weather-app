const app = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_LOCATION':
      return action.data
    default:
      return state
  }
}

export default app;
