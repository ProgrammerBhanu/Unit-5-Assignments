import {useState} from "react"

export const Register = ()=>{
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
              //
          }}>Register</button> 
        </div>
    )
}