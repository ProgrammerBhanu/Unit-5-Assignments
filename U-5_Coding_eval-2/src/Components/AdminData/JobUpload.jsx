import {useDispatch} from "react-redux";
import { useContext, useState } from "react";
import {addJobLoading,addJobSuccess,addJobError} from "../../Admin/Actions"
import {Navigate, useNavigate} from "react-router-dom";
import {AuthContext} from "../AuthContext";
export const JobUpload = ()=>{
    const {token} = useContext(AuthContext);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const payload = {
        c_name:"",
        title:"",
        salary:1000,
        des:"",
        location:"",
        type:"full time"
    }
    const [form, setForm] = useState(payload);

    const handleChange = (e) => {
        let { name, value } = e.target;
        value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        setForm({ ...form, [name]: value });
    }

    
    console.log(form);
    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(addJobLoading());
        fetch("http://localhost:3001/jobs",{
                    method:"POST",
                    body: JSON.stringify(form),
                    headers:{
                        "Content-Type":"application/json"
                    }
                }).then(d=>d.json()).then(res=>{
                    // Success
                    dispatch(addJobSuccess(res));
                    navigate(-1);
                    // dispatch(getData())
                }).catch(err=>{
                    // Error
                    dispatch(addJobError(err));
                })
                // dispatch(addTodo(text));
    }
    if(token != "admin"){
        return <Navigate to={"/admin/login"}/>
    }
    return <div>
        <h3>Job Detail's Form</h3>
        <form onSubmit={handleFormSubmit} className='form'>
            <div>
                <div>
                    <label>Company Name: </label>
                    <input onChange={handleChange} type='text' name="c_name" value={form.c_name} />
                </div>
                <div>
                    <label>Title: </label>
                    <input onChange={handleChange} type='text' name="title" value={form.title} />
                </div>
                
                <div>
                    <label>Salary: </label>
                    <input onChange={handleChange} type='number' name="salary" value={form.salary}/>
                </div>
                <div>
                    <label>Description: </label>
                    <input onChange={handleChange} type='text' name="des" value={form.des} />
                </div>
                <div>
                    <label>Location: </label>
                    <input onChange={handleChange} type='text' name="location" value={form.location} />
                </div>
                
                <div>
                    <label>Job Type: </label>
                    <select name="type" onChange={handleChange} value={form.type} >
                        <option value="">--Choose an option--</option>
                        <option value="Full time">Full Time</option>
                        <option value="Remote">Remote</option>
                        <option value="Part Time">Part Time</option>
                        <option value="Regular">Regular</option>
                    </select>
                </div>
            </div>

            <input type='submit' />
        </form>
    </div>
}