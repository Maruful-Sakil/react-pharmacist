import { useState } from "react";
import axiosConfig from './axiosConfig';
const Login =()=>{
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const handleForm=(event)=>{
        event.preventDefault();
        var data={email:email,password:password};
        axiosConfig.post("login",data).then(
            (succ)=>{
                localStorage.setItem('_authToken',succ.data.tkey);
                debugger;
            },
            (err)=>{

            }
        )
    }
    return(
        <div>
            <form onSubmit={handleForm}>
                <br/>
                Email:<input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="text"/><br/>
                Password: <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password"/> <br/>
                <input type="submit" value="login"/>
            </form>
            
        </div>
    )
}
export default Login;