import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'


const MyInput = forwardRef((props,ref)=>{
    const [fontSize,setFontSize] = useState(14);
    useImperativeHandle(ref,()=>({
        hi:sayHello,
        incFont:()=>{setFontSize(fontSize+2)},
        decFont:()=>{setFontSize(fontSize-2)}
    }))
        const sayHello =()=>{
            alert('hello')
        }
    return <input type="text" style={{fontSize}}/>
})



const AppUseImperativeHandle = () => {
    const inputRef = useRef();
   
    const handleClick =()=>{
        inputRef.current.hi();
    }
  return (
    <div>
        <MyInput  ref={inputRef}/>
        <button onClick={handleClick}>click</button>
        <button onClick={()=>{inputRef.current.incFont()}}>+</button>
        <button onClick={()=>{inputRef.current.decFont()}}>-</button>
  
    </div>
  )
}

export default AppUseImperativeHandle