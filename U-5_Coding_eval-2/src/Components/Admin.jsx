import styled from "styled-components";
import {Link} from "react-router-dom"
const Div = styled.div`
    background-color: papayawhip;
    width: 100%;
    height: 100vh;
    
`;
const Nav = styled.div`
    display: flex;
    justify-content: space-around;
    width: 60%;
    margin: auto;
    border: 2px solid black;
    border-radius: 15px;
    height: 50px;
    align-items: center;
    
`;
const H1 = styled.h1`
    color:red
`;
export const Admin = ()=>{
    return (
        <Div>
        
        <Nav>
        <Link to="/">Home</Link>
        <Link to="/admin/job">Post Job</Link>
        <Link to="/admin/register">Register</Link>
        <Link to="/admin/login">Login</Link>
        </Nav>
        <H1>Admin Workspace</H1>
        </Div>
    )
}