import React, { useState,useMemo } from 'react'
import userlist from '../data/users.json';
const AppUseMemo = () => {
    const [count,setCount] = useState(0)
    const [userId,setUserId] = useState(null);
    function getUserRows(){
        console.log('getUserRows worked');
        return userlist.map((user,index)=><div style={{color:user.id === userId ?"red":"black"}} onClick={()=>{
            setUserId(user.id)
        }} key={index}>{user.name}</div>)
    }
    const userRows = useMemo(()=>getUserRows(),[userId]);
  return (
    <div>
        {userRows}
        <p>{userId}</p>
        <button onClick={()=>{setCount(count+1)}}>add</button>
        {count}
    </div>
  )
}

export default AppUseMemo