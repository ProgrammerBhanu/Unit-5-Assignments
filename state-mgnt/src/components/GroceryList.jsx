import logo from '../Supermarkt.jpg';
export const GroceryList = ({item,price,id,handleToggle})=>{
    return (
        <div className="item">
            <img src={logo} alt="" srcset="" />
            <h2>Product Name : {item}</h2>
            <h4>Price: {price}</h4>
            <button onClick={()=>handleToggle(id)}>Delete</button>
        </div>
    )
}
