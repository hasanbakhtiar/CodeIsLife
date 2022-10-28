import React from 'react'
import { useState } from 'react'

const Usestate = () => {
    const [count,setCount] = useState(11);
    // const increment=()=>{
    //     setCount(count+1)
    // }
  return (
    <div className='container mt-5'>
        <h1>count:{count}</h1>
        {/* <button className='btn btn-primary' onClick={increment}>+</button> */}
        <button className='btn btn-primary' onClick={()=>{
           if (count>10) {
            setCount(count+2)
           }
        }}>+</button>
    </div>
  )
}

export default Usestate