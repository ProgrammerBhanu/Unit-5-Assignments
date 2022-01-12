import {useSelector} from 'react-redux';
import {TodoInput} from './TodosInput';
import { TodoRow } from './TodosList';
import './todos.css';

export const Todos = ()=>{
    const data = useSelector((state=>state.todos));
    console.log(data);
    return (
        <div style={{textAlign:"center"}}>
            <TodoInput/>
            <h2>MY TODOS</h2>
            <table className='todo-table'>
                
                <tr>
                    <th>Id:</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Mark/Remove</th>
                </tr>
                {data.map((e)=>(
                    <TodoRow props={e}/>
                ))}
            </table>
        </div>
    )
}