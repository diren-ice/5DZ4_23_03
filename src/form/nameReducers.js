export const nameReducer = (state={name: ''}, action) => {
  if (action.type === 'CHANGE_NAME') {
      return {...state, name: action.payload}
      } return state
}
const CHANGE_NAME = 'CHANGE_NAME'

export const changeName = payload => ({type: CHANGE_NAME, payload})