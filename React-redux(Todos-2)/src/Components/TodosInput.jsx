import {useState} from "react"
import {  useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import {addTodoError,addTodoSuccess,addTodoLoading} from "../Store/Actions";
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
                dispatch(addTodoLoading());
                fetch("http://localhost:3001/todos",{
                    method:"POST",
                    body: JSON.stringify(payload),
                    headers:{
                        "Content-Type":"application/json"
                    }
                }).then(d=>d.json()).then(res=>{
                    // Success
                    dispatch(addTodoSuccess(res));
                    // dispatch(getData())
                }).catch(err=>{
                    // Error
                    dispatch(addTodoError(err));
                })
                // dispatch(addTodo(text));
            }}>Add Todo</button>
        </div>
    )
}