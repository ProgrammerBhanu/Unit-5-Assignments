
import { Div,Button,H3 } from "../styled/ReactCSS"
import Popup from "./Popup";
import Form from "./Form";
import { useState } from "react";
import Logo from './logo.png';

export const Nav = ()=>{
    const [isOpen, setIsOpen] = useState(false);
    const [route, setRoute] = useState("");
    
    const togglePopup = (e) => {
        console.log(e)
      setIsOpen(!isOpen);
      setRoute(e)
    }
    return <div>
        
        <Div>
            <img className="logo-gun" src={Logo} alt="" srcset="" />
            <Button>Home</Button>
            <H3>About</H3>
            <H3>Projects</H3>
            <div style={{display:"flex"}}>
            <H3 onClick={()=>togglePopup("register")} >Register</H3>
            <H3 onClick={()=>togglePopup("login")}>Login</H3>
            </div>
        </Div>
        {isOpen && <Popup content={<Form route={route}/>} handleClose={togglePopup}/>}
      
    </div>
}