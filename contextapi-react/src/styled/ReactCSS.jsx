import Styled from 'styled-components';

export const Div = Styled.div`
    width: 100%;
    display:flex;
    height:50px;
    border :1px solid black; 
    justify-content:space-around;
    align-items:center;
`;

export const Button = Styled.button`
    color: white;
    background-color:rgb(38, 50, 56);
    font-size:18px;
    cursor: pointer;
    &:hover{
        background-color: red;
    }
`;

export const H3 = Styled.h3`
    color:red;
    font-size: 18px;
    margin: 0px 5px;
    cursor: pointer;
    &:hover{
        color:blue;
    }
`;