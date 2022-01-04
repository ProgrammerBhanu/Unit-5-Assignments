import {useContext} from "react"
import {AuthContext} from "../contexts/AuthContext";
import { H3 } from "../styled/ReactCSS";

export const Body = ()=>{
    const {isAuth,HandleAuth} = useContext(AuthContext)
    console.log(HandleAuth);
    return <div>
        {isAuth === ""?'':<H3>You've {isAuth.route} successfully. Token : {isAuth.token}</H3>}
    </div>
}