import { useState } from "react";
import axiosConfig from './axiosConfig';
const Login =()=>{
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const [errs,setErrs] = useState({});
    const [msg,setMsg] = useState("");
    const handleForm=(event)=>{
        event.preventDefault();
        var data={email:email,password:password};
        axiosConfig.post("login",data).then(
            (succ)=>{
                setMsg(succ.data.msg);
                localStorage.setItem('_authToken',succ.data.tkey);
                window.location.href="/list";
            },
            (err)=>{
                setErrs(err.response.data);
            }
        )
    }
    return(
        <div>
            <form onSubmit={handleForm}>
            <h1>{msg}</h1><br/>
                <br/>
                Email:<input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="text"/><span>{errs.email? errs.email[0]:''}</span><br/>
                Password: <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password"/><span>{errs.password? errs.password[0]:''}</span><br/>
                <input type="submit" value="login"/>
            </form>
            
        </div>
    )
}
export default Login;