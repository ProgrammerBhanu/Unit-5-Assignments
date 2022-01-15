import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {deleteTodoError,deleteTodoLoading,deleteTodoSuccess,getData, toggleTodoError, toggleTodoLoading, toggleTodoSuccess} from "../Store/Actions";
export const TodoRow = ({props})=>{
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    console.log(props);
    // const {id,title,status} = props;
    return <>
        <tr>
            <td>{props.id}</td>
            <td>{props.title}</td>
            <td className="toggle" onClick={()=>{
                // dispatch(toggleTodo(props.id));
                dispatch(toggleTodoLoading());
                fetch(`http://localhost:3001/todos/${props.id}`,{
                    method:"PATCH",
                    body: JSON.stringify({status:!props.status}),
                    headers:{
                        "Content-Type":"application/json"
                    }
                }).then(d=>d.json()).then(res=>{
                    // Success
                    dispatch(toggleTodoSuccess(res));
                    dispatch(getData())
                }).catch(err=>{
                    // Error
                    dispatch(toggleTodoError(err));
                })
            }}>{props.status?(
                <span style={{ color: "green" }}>Done</span>
              ) : (
                <span style={{ color: "coral" }}>Not Done</span>
              )}</td>
            <td >
            <button className="del-btn" onClick={()=>{
                // dispatch(toggleTodo(props.id));
                dispatch(deleteTodoLoading());
                fetch(`http://localhost:3001/todos/${props.id}`,{
                    method:"DELETE",
                    headers:{
                        "Content-Type":"application/json"
                    }
                }).then(d=>d.json()).then(res=>{
                    // Success
                    dispatch(deleteTodoSuccess());
                    dispatch(getData())
                }).catch(err=>{
                    // Error
                    dispatch(deleteTodoError(err));
                })
            }}>Delete</button>
            </td>
            <td><Link className="edit-btn" to={`/edit/${props.id}`}>Edit</Link></td>
        </tr>
    </>
}