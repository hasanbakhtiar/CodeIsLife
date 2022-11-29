import { useState } from "react"
import User from "./User"

type ProductDataType={
    title:string,
    price:number
}

const App = (props:ProductDataType) => {
const [logdata,setLogdata] = useState(false);
  return (
    <div>
        {props.title}
        {props.price}
        <User info="Hasan" messageCount={30} isLoggedIn={logdata}/>
        <button onClick={()=>{setLogdata(logdata === false?  true :  false)}}>
            log in
        </button>
    </div>
  )
}

export default App