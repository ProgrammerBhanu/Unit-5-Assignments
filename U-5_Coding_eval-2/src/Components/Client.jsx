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
export const Client = ()=>{
    return (
        <Div>
        
        <Nav>
        <Link to="/">Home</Link>
        <Link to="/client/seejob">See All Jobs</Link>
        <Link to="/client/register">Register</Link>
        <Link to="/client/login">Login</Link>
        </Nav>
        <H1>Client Workspace</H1>
        </Div>
    )
}