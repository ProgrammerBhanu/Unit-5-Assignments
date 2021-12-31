// import logo from './logo.svg';
import './App.css';
import { Timer } from './components/Timer';
import {useState} from 'react';

import logo from './components/bomb.png';



function App() {
  const [show,setShow] = useState(true);

  return (
    <div>
      <h1 className='logo'>
      <img src={logo} alt="" srcset="" />
        <span>Bomb Timer</span>
        </h1>
    <div className="App">
      {show?<Timer/>:null}
      <button className='noselect' onClick={()=>setShow(show?false:true)}>{show?"show":"Hide"}</button>
    </div>
    </div>
  );
}

export default App;