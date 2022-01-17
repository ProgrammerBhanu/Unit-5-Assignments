import { createContext, useState } from "react";

export const AuthContext = createContext({token:"", HandleToken:()=>{}});

export const AuthContextProvider = ({children})=>{
    const [token,setToken] =  useState("");
    const HandleToken = (value)=>{
        setToken(value)
    }
    return <AuthContext.Provider value={{token,HandleToken}}>{children}</AuthContext.Provider>
}