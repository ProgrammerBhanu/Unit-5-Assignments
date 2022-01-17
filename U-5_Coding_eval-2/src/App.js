// import logo from './logo.svg';
import './App.css';
import {Home} from "./Components/Home"
import { Admin } from './Components/Admin';
import {Route, Routes} from 'react-router-dom';
import {Client} from './Components/Client';
import {Register} from "./Components/Register";
import {Login} from "./Components/Login";
import {JobUpload} from "./Components/AdminData/JobUpload"
import {ShowJobs} from "./Components/AllJobs";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/client" element={<Client/>}/>
        <Route path="/client/register" element={<Register/>}/>
        <Route path="/client/login" element={<Login/>}/>
        <Route path="/admin/register" element={<Register/>}/>
        <Route path="/admin/login" element={<Login/>}/>
        <Route path="/admin/job" element={<JobUpload/>}/>
        <Route path="/client/seejob" element={<ShowJobs/>}/>
      </Routes>       
    </div>
  );
}

export default App;
