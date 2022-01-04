import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
    const [isAuth,setIsAuth] = useState("");
    const HandleAuth = (value)=>{
        setIsAuth(value)
    }
    return <AuthContext.Provider value={{isAuth,HandleAuth}}>{children}</AuthContext.Provider>
}