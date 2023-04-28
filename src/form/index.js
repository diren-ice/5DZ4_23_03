import { legacy_createStore as createStore, combineReducers } from 'redux'
import {nameReducer} from "./nameReducers.js";
import {ageReducers} from "./ageReducers.js";
import {genderReducers} from "./gendeReducers.js";
import {counterReducers} from "./counterReducers.js";
const rootReducer = combineReducers({
  name: nameReducer,
  age: ageReducers,
  gender: genderReducers,
  counter: counterReducers
})


export const store = createStore(rootReducer)