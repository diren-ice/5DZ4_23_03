export const genderReducers = (state = {name: ""}, action) => {
if (action.type === 'CHANGE_GENDER') {
          return {...state, gender: action.payload}
      } return state
}



export const CHANGE_GENDER = 'CHANGE_GENDER'

export const changeGender = payload => ({type: CHANGE_GENDER, payload})