import React, { useEffect, useLayoutEffect, useState } from 'react'

const AppUseLayoutEffect = () => {
    const [message,setMessage] = useState("Hello");
    useLayoutEffect(()=>{
        alert("hello")
        setMessage('new value');
    })
  return (
    <div>{message}
    {console.log(message)}
    </div>
  )
}

export default AppUseLayoutEffect