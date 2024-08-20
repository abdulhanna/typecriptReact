import { stat } from 'fs'
import React, { useReducer } from 'react'

type CounnterState = {
    count :number
}

type UpdateAction = {
    type: "Increment" | 'decrement' 
    payload : number
}

type ResetAction = {
    type:"reset"
}

type CounterAction = UpdateAction | ResetAction

// type CounterAction = {
//     type: "Increment" | 'decrement' | 'reset'
//     payload?: number

// }
const initialVal = {count:0} 

function reducer(state : CounnterState,action:CounterAction){

    switch(action.type){
        case "Increment" :
            return {
              count:state.count + action.payload
            }
        case 'decrement' :
             return {count:state.count - action.payload}
        case "reset":
            return initialVal
        default :
            return state
    }
}
const Counter = () => {
    const [state,dispatch] = useReducer(reducer,initialVal)
  return (
    <div>
       {`Count : ${state.count}`}
       <button onClick={()=> dispatch({type:"Increment", payload:10})}>Incremennt 10</button>
       <button onClick={()=> dispatch({type:"reset"})}>Reset</button>
       <button onClick={()=> dispatch({type:"decrement", payload:10})}>Decremennt 10</button>
    </div>
  )
}

export default Counter
