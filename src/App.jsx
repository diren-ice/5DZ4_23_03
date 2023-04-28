import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import {changeAge} from "./form/ageReducers.js";
import {changeName} from "./form/nameReducers.js";
import {changeGender} from "./form/gendeReducers.js";
import {inpCounter} from "./form/counterReducers";
// import {increaseCounter, decreaseCounter} './form/counterReducers'
function App() {
          const formAge = useSelector(state => state.age.age)
          const formName = useSelector(state => state.name.name)
          const formGender = useSelector(state => state.gender.gender)
          const formCounter = useSelector(state => state.counter.counter)
        const dispatch = useDispatch()


      const onchangeName= (e) => {
    dispatch(changeName(e.target.value))
  }
     const onchangeAge = (e) => {
    dispatch(changeAge(e.target.value))
  }
    const onchangeGender = (e) => {
    dispatch(changeGender(e.target.value))
  }
  const counterInput = (e) => {
           dispatch(inpCounter(e.target.value))
  }
  // const increase = () => {
  //   dispatch(increaseCounter())
  // }
  //
  //  const decrease = () => {
  //    dispatch(decreaseCounter())
  // }


    return (
    <div className={'FORMS'}>
        <input type="name" placeholder={"Write name"} onChange={onchangeName}/>
                <h3>Name: {formName}</h3>
        <input type="age" placeholder={"Write age"} onChange={onchangeAge}/>
               <h3>Age: {formAge}</h3>
        <select  onChange={onchangeGender}>
            <option>MAN</option>
            <option>WOMEN</option>
        </select>
            <h3>Gender: {formGender}</h3>
      {/*  <button onClick={increase}>+</button>*/}
      {/*<button onClick={decrease}>-</button>*/}
        <input type={"number"} onChange={counterInput}/>
        <h3> Number: {formCounter}</h3>
    </div>

  )
}

export default App