import { useState } from "react";
import axiosConfig from './axiosConfig';

const CreateSupplier=()=>{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [conf_password,setCpassword] = useState("");
    const [gender,setGender] = useState("");
    const [dob,setDob] = useState("");
    const [image,setImage] = useState("");
    const [errs,setErrs] = useState({});
    const [msg,setMsg] = useState("");
    const handleSubmit=(event)=>{
        event.preventDefault();
        const data={name:name,email:email,password:password,conf_password:conf_password,gender:gender,dob:dob,image:image};
        axiosConfig.post("supplier/create",data).then((succ)=>{
            //setMsg(succ.data.msg);
            window.location.href="/list";
        },(err)=>{
            debugger;
            setErrs(err.response.data);
        })
    }
    return(
        <form onSubmit={handleSubmit}>
            <h1>{msg}</h1>
            Name:<input value={name} onChange={(e)=>{setName(e.target.value)}} type="text"/><span>{errs.name? errs.name[0]:''}</span><br/>
            Email: <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="text"/><span>{errs.email? errs.email[0]:''}</span><br/>
            Password: <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password"/><span>{errs.password? errs.password[0]:''}</span><br/>
            Confirm Password: <input value={conf_password} onChange={(e)=>{setCpassword(e.target.value)}} type="password"/><span>{errs.conf_password? errs.conf_password[0]:''}</span><br/>
            Gender: <input value={gender} onChange={(e)=>{setGender(e.target.value)}} type="text"/><span>{errs.gender? errs.gender[0]:''}</span><br/>
            Dob: <input value={dob} onChange={(e)=>{setDob(e.target.value)}} type="date"/><span>{errs.dob? errs.dob[0]:''}</span><br/>
            {/* Image: <input value={image} onChange={(e)=>{setImage(e.target.value)}} type="file"/><span>{errs.image? errs.image[0]:''}</span><br/> */}
            <input type="submit" value="Create"/> 
        </form>
    )
}
export default CreateSupplier;