import {useContext, useState} from "react"
import {useNavigate} from "react-router-dom";
import {AuthContext} from "./AuthContext";

export const Login = ()=>{
    const {token,HandleToken} = useContext(AuthContext);

    const navigate  = useNavigate();
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
    console.log({email,pass})
    return (
        <div>
         <input
          value={email}
          placeholder="Enter your Email "
          onChange={(e)=>setEmail(e.target.value)}
          type="text" /> 
          <input value={pass} placeholder="Enter Your Password"
          onChange={(e)=>setPass(e.target.value)}
          type="password" /> 
          <button onClick={()=>{
              HandleToken("admin");
              navigate(-1);
          }}>Login</button> 
        </div>
    )
}