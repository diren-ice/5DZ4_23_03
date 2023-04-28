export const counterReducers = (state={counter: 1}, action) => {
  // if (action.type === 'INCREASE_COUNTER') {
  //   return {...state, counter: state.counter+1)
  // }
    // else if (action.type === 'DECREASE_COUNTER') {
  //   return {...state, counter: state.counter-1}
  // }
  if (action.type === 'INP_COUNTER') {
     return {...state, counter: action.payload}
  }
  else {
    return state
  }
}
// export const INCREASE_COUNTER = 'INCREASE_COUNTER'
export const INP_COUNTER = 'INP_COUNTER'
// export const DECREASE_COUNTER = 'DECREASE_COUNTER'
//
// export const increaseCounter =  () => ({type: INCREASE_COUNTER})
// export const decreaseCounter =  () => ({type: DECREASE_COUNTER})
export const inpCounter = payload => ({type: INP_COUNTER, payload})