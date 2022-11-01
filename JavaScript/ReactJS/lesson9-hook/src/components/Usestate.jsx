import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Usestate = () => {
    const [count,setCount] = useState(11);
    const [number,setNumber] = useState(1);
    useEffect(()=>{
      console.log('useEffect is running...');
    },[number])
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
        <h1>number:{number}</h1>
        <button onClick={()=>{setNumber(number-1)}}>-1</button>
    </div>
  )
}

export default Usestate