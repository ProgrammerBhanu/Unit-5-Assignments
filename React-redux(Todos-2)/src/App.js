// import logo from './logo.svg';
import {Todos} from './Components/Todos';
import './App.css';
import {TodoEdit} from "./Components/Edit";
import {Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <h1>TO DO LIST</h1>
    
      <Routes>
        <Route path="/" element={<Todos/>}></Route>
        <Route path="/edit/:id" element={<TodoEdit/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
