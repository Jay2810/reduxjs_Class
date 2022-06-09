export default (state = 5, action) => {
  switch (action.type) {
    case 'INCREMENT':
      console.log(action.type,state+1);
      return state + 1
    case 'DECREMENT':
      console.log(action.type,state-1);
      return state - 1
    default:
      return state
  }
}
