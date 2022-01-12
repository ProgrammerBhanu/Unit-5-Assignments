import {useState} from "react"
import {  useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import {addTodo} from "../Store/Actions";
export const TodoInput=()=>{
    
    const [text,setText] = useState("");
    const dispatch = useDispatch();
    var payload = {
        id:uuidv4(),
        title:text,
        status:false
    }
    // console.log(payload);
    return (
        <div className="todo-inp">
            <input value={text} onChange={(e)=>setText(e.target.value)} type="text" placeholder="Enter the Todo" />
            <button onClick={()=>{
                dispatch(addTodo(payload))
            }} >Add Todo</button>
        </div>
    )
}