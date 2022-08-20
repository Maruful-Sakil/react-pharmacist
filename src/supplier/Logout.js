import { useState } from "react";
import axiosConfig from './axiosConfig';
const Logout =()=>{
    const[tkey,setTkey] = useState("");
    const handleForm=(event)=>{
        event.preventDefault();
        var data={tkey:tkey};
        axiosConfig.post("logout",data).then(
            (succ)=>{

            },
            (err)=>{

            }
        )
    }
    return(
        <div>
            <form onSubmit={handleForm}>
                <br/>
                <input type="submit" value="Logout"/>
            </form>
            
        </div>
    )
}
export default Logout;