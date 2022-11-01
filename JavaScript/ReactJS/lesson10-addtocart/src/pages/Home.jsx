import React, { useState } from 'react'
import newdata from '../data/newdata';
import productslist from '../data/productslist'

const Home = () => {
  const [data,setData] = useState(productslist);
  return (
    <div className='container'>
      <h1 className="text-center">
        {data.map((fd)=>(
          <h1>{fd.name}</h1>
        ))}
      </h1>
      <button onClick={
        ()=>{setData(newdata)}
      }>change</button>
    </div>
  )
}

export default Home