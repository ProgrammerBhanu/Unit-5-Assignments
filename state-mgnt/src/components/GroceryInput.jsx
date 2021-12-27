import { useState } from "react"
export const GroceryInput = ({getData})=>{
    const [text,setText] = useState("");
    const EventChange = (e)=>{
        setText(e.target.value);
    }
    const EventClick = ()=>{
        getData(text);
  

    }

    return (
        <div className="inp-con">
            <input type="text" placeholder="Enter Grocery Product"  onChange={EventChange} />
            <button onClick={EventClick}>Add Item</button>

        </div>
    )
}