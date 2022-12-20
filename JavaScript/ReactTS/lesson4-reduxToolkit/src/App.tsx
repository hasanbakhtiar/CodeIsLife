import { useState } from "react"
import { add, remove } from "./feauters/todoSlice";
import { useAppDispatch, useAppSelector } from "./store";

const App = () => {
    const todos = useAppSelector(state=>state.todos)
    const [title,setTitle] = useState("");

    const dispatch = useAppDispatch();
    const onSave=()=>{
        dispatch(add(title));
        setTitle("");
    }
    const onDelete =(id:string)=>{
        dispatch(remove(id))
    }
  return (
    <div>
        <input onChange={(e)=>{setTitle(e.target.value)}} value={title} type="text" />
        <button onClick={onSave}>add</button>
        <ol>
            {todos.map((todo:any,i:number)=>(
                <li key={i}>{todo.title}<button onClick={()=>onDelete(todo.id)}>del</button></li>
            )
            )}
        </ol>
    </div>
  )
}

export default App