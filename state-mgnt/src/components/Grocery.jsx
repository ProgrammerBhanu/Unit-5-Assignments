import { useState } from "react";
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";
import { nanoid } from 'nanoid';

export const Grocery = ()=>{
    const [list,setList] = useState([]);

    const EventClick = (data)=>{
        let val = Math.floor((Math.random() * 91) + 10);
        const payload = {
            item:data,
            price:val,
            id:nanoid(7),
        };

        setList([...list,payload]);
    }

    const HandleToggle = (delete_id)=>{
        const newItem = list.filter((item) => item.id !== delete_id);
        setList(newItem);
    }
    return (
    <>
        <h1 className="logo">Masai Grocery</h1>
        <GroceryInput getData={EventClick}/>
        <div className="container">
        {list.map((e)=>(
            <GroceryList {...e} handleToggle={HandleToggle} />
        ))}
        </div>
    </>
    );
}