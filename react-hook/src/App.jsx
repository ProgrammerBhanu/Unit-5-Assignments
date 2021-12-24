import {useState} from "react";
import './App.css';



const App = function() {
    
    const [count, setCount] = useState(0);

    const changeOne = (v)=>{
        if(v === 2){

            setCount(count+count);
        }else{
            setCount(count+v);
        }
    }
    function reset(){
        setCount(0);
    }
    // Conditional rendering
    if(count > 100){
        return <h1>Your Counter limit has been exceed</h1>
    }
     return (
        <div className="App">
            <h1>Counter: {count}</h1>
            <button onClick = {() =>changeOne(1)}>Add 1 </button>
            <button onClick = {() =>changeOne(2)}>Double </button>
            <button onClick = {() =>changeOne(-1)}>Sub 1 </button>
            <button className="reset" onClick = {() =>reset()}>Reset </button>
            <h3>This number is <span className="ev-od">{count % 2 === 0 ? "Even":"Odd"}</span></h3>
      </div>)
}
               

export default App;