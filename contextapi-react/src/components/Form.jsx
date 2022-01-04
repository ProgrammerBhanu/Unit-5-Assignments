import { useContext, useState } from "react";
import {AuthContext} from "../contexts/AuthContext";
// import './Form.css';


function Form({route}) {
    console.log(route)
    const {isAuth,HandleAuth} = useContext(AuthContext);

    const initFormData = {
        email: '',
        password: ''
    }

    const [form, setForm] = useState(initFormData);

    const handleChange = (e) => {
        let { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    console.log(form);
    const handleFormSubmit = (e) => {
        e.preventDefault();

        fetch(`https://reqres.in/api/${route}`, {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
        .then(result => {
          HandleAuth({...result,route});
        })
    }
    console.log("Data",isAuth);
    return <div>
        <h3>User {route} Form</h3>
        <form onSubmit={handleFormSubmit} className='form'>
            <div>
                
                <div>
                    <label>Eamil: </label>
                    <input onChange={handleChange} type='email' name="email" value={form.email}/>
                </div>
                <div>
                    <label>Password: </label>
                    <input onChange={handleChange} type='password' name="password" value={form.password}/>
                </div>
            </div>

            <input type='submit' />
        </form>
    </div>

}

export default Form;