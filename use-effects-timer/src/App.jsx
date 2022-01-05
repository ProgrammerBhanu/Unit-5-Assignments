// import logo from './logo.svg';
import './App.css';
import { Timer } from './components/Timer';
import {useState,useEffect} from 'react';


import logo from './components/bomb.png';
import Styled from 'styled-components';

const Cont = Styled.div`
    color:black;
    display:flex;
    border:1px solid red;
    & > p{
        color:red;
        cursor:pointer;
    }
    &>p:hover{
        color:blue;
    }
`;



function App() {
  const [initialTime, setInitialTime] = useState(0);
  const [finalTime, setFinalTime] = useState(10);
  const [startTimer, setStartTimer] = useState(false);

  return (
    <>   
     <h1 className='logo'>
        <img src={logo} alt="" srcset="" />
        <h3>Bomb Timer</h3>
      </h1>
    <div className="App">
      <div className="container">
        <div className='input-container'>
          <label>Initial Time:
            <input type='number' onChange={(e) => setInitialTime(e.target.value)} placeholder="Initial time" value={initialTime} />
          </label>
        </div>
        <div className='input-container'>
          <label>Final Time:
            <input type='number' onChange={(e) => setFinalTime(e.target.value)} placeholder="Final time" value={finalTime} />
          </label>
        </div>

        {startTimer ? <Timer initialTime={+initialTime} finalTime={+finalTime} /> : <h3>Timer Stopped</h3>}

        <button onClick={() => setStartTimer(!startTimer)}>{startTimer ? 'Stop' : 'Start'}</button>
      </div>
    </div>
    </>

  );
}

export default App;