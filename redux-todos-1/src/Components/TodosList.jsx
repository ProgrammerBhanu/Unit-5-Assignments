import { useDispatch } from "react-redux";
import {deleteTodo,toggleTodo} from "../Store/Actions";
export const TodoRow = ({props})=>{

    const dispatch = useDispatch();
    console.log(props);
    // const {id,title,status} = props;
    return <>
        <tr>
            <td>{props.id}</td>
            <td>{props.title}</td>
            <td className="toggle" onClick={()=>{
                dispatch(toggleTodo(props.id));
            }}>{props.status?(
                <span style={{ color: "green" }}>Done</span>
              ) : (
                <span style={{ color: "coral" }}>Not Done</span>
              )}</td>
            <td ><button className="del-btn" onClick={()=>{
                dispatch(deleteTodo(props.id));
            }}>Delete</button></td>
        </tr>
    </>
}