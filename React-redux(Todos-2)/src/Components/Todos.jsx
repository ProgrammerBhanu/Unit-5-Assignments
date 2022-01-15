import {useDispatch, useSelector} from 'react-redux';
import {TodoInput} from './TodosInput';
import { TodoRow } from './TodosList';
import './todos.css';
import {useEffect} from 'react';
import { getData } from '../Store/Actions';

export const Todos = ()=>{
    const dispatch = useDispatch();
    const {loading,data,error} = useSelector((state)=>({
        loading:state.loading,
        data:state.todos,
        error:state.err
    }));
useEffect(()=>{
    getTodos();
},[])   
    const getTodos = async()=>{
        dispatch(getData())
    }
    // console.log(data);

    return loading?(<h3>Loading...</h3>
        ):error?(
            <div>Something went wrong</div>
        ): (
        <div style={{textAlign:"center"}}>
            <TodoInput/>
            <h2>MY TODOS</h2>
            <table className='todo-table'>
                
                <tr>
                    <th>Id:</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Mark/Remove</th>
                    <th>Update</th>
                </tr>
                {data.map((e)=>(
                    <TodoRow props={e}/>
                ))}
            </table>
        </div>
    )
}