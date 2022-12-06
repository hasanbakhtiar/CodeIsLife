import React, { useRef } from 'react'

const AppUseRef = () => {
    const inputRef = useRef();
    const handleClick=()=>{
        console.log(inputRef.current);
    }
  return (
    <div>
        <input type="text" ref={inputRef} />
        <button onClick={handleClick}>submit</button>
    </div>
  )
}

export default AppUseRef