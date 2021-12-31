import { useState } from "react";
import { useEffect } from "react";

export const Todos = ()=>{
    const [text,setText] = useState("");
    const [todo,setTodo] = useState([]);
    // console.log(text);
    useEffect(()=>{
        GetTodo();
    },[]);

    const GetTodo = ()=>{
         fetch("http://localhost:3001/todos")
         .then((d)=>d.json())
         .then((res)=>{
             setTodo(res);
         })
         
    }
    const AddTodo = ()=>{
        const payload = {
            title:text,
            status:true,
        };
        // console.log(payload);
        fetch("http://localhost:3001/todos",{
            method: "POST",
            body: JSON.stringify(payload),
            headers:{
                "content-type":"application/json",
            },
        });
    }

    return (
        <div>
            <input
            type="text"
            onChange={(e)=>setText(e.target.value)}
            placeholder="Enter Todo"
            />
            <button onClick={AddTodo}>Add Todo</button>
            {todo.map((e)=>(
                <div>{e.title}</div>
            ))}
        </div>
    );
};