import {useState} from "react"
import {  useDispatch } from 'react-redux';
import {useParams} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {editTodoError, editTodoLoading, editTodoSuccess, getData} from "../Store/Actions";
export const TodoEdit=()=>{
    const navigate = useNavigate();
    const {id}  = useParams();
    const [text,setText] = useState("");
    const dispatch = useDispatch();
    // console.log(payload);
    return (
        <div className="todo-inp">
            <h1>Edit Todo</h1>
            <input value={text} onChange={(e)=>setText(e.target.value)} type="text" placeholder="Edit the Todo" />
            <button onClick={()=>{
                dispatch(editTodoLoading());
                fetch(`http://localhost:3001/todos/${id}`,{
                    method:"PATCH",
                    body: JSON.stringify({title:text}),
                    headers:{
                        "Content-Type":"application/json"
                    }
                }).then(d=>d.json()).then(res=>{
                    // Success
                    dispatch(editTodoSuccess(res));
                    navigate(-1)
                    dispatch(getData())
                    
                }).catch(err=>{
                    // Error
                    dispatch(editTodoError(err));
                })
                // dispatch(addTodo(text));
            }}>Edit Todo</button>
           
        </div>
    )
}