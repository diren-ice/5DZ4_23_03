export const ageReducers = (state = {name: ''}, action) => {
 if (action.type === 'CHANGE_AGE') {
          return {...state, age: action.payload}
      } return state
}


export const CHANGE_AGE = 'CHANGE_AGE'

export const changeAge = payload => ({type: CHANGE_AGE, payload})