const settings = (state = '', action) => {
  switch (action.type) {
    case 'ADD_PIN':
      return action.text
    default:
      return state
  }
}

export default settings;
