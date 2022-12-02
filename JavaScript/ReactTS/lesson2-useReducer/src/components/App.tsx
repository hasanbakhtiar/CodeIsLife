import { useReducer } from "react"
import reducer from '../reducers/CounterReducer';
const initialState = {count:0}


const App = () => {
    const [state,dispatch] = useReducer(reducer,initialState);
  return (
    <div className='container mt-5'>
        <button className='btn btn-primary' onClick={()=>
         state.count>0 ?   dispatch({type:'decrement',payload:1}) : dispatch({type:'decrement',payload:0})
        }>-1</button>
        <span className='mx-3'>{state.count}</span>
        <button className='btn btn-primary me-3' onClick={()=>dispatch({type:'increment',payload:1})}>+1</button>
        <button className='btn btn-warning' onClick={()=>dispatch({type:'reset'})}>reset</button>
    </div>
  )
}

export default App