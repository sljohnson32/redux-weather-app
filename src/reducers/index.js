const exampleReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default exampleReducer;


// const exampleReducer = (state = [], action) => {
//   switch (action.type) {
//     case 'RECIEVE_FORECAST':
//       return [...state, action.data]
//       break
//     default:
//       return state
//   }
// }
//
// export default exampleReducer;
