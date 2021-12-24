// import logo from './logo.svg';
import './App.css';


const el1 = ["Android", "Blackberry", "iPhone", "Windows"];
const el2 = ["Samsung", "HTC", "Micromax", "Apple"];

function App() {
    return (
         <div className = "App"> 
         <MobileOS/>
         <MobileManufacture/>
        </div>);
}

const MobileOS = function() {
     return (
         <div className="list-item">
         <h1> Mobile Operating System </h1>
         <ul>
             {el1.map((e) => (
              <li>{e}</li>
              ))}
         </ul>
         </div>
     );
};
const MobileManufacture = function() {
    return (
        <div className="list-item">
        <h1> Mobile Manufacturer</h1>
        <ul>
            {el2.map((val) => (
             <li>{val}</li>
             ))}
        </ul>
        </div>
    );
};

export default App;
