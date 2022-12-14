import { useState, useEffect } from "react";
import axiosConfig from './axiosConfig';
//import 'antd/dist/antd.css';
//import { Button } from "antd";
import "../Mystyle.css";
const BuyerList=()=>{
    const[buyers,setBuyers] = useState([]);
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[number, setNumber] = useState("");
    const[userId, setUserId] = useState(null);
    const[msg,setMsg] = useState("");
    useEffect(()=>{
        axiosConfig.get("buyer/list").then((rsp)=>{
        setMsg(rsp.data.msg);
        setBuyers(rsp.data);
        },(er)=>{

        })
    },[]);
    function getBuyers(){
        axiosConfig.get("buyers/list").then((result)=>{
            result.json().then((rsp)=>{
                setBuyers(rsp)
                setName(rsp[0].name);
                setEmail(rsp[0].email);
                setNumber(rsp[0].number);
                setUserId(rsp[0].id);
            })
        })
    }
    const loadData=()=>{
        axiosConfig.get("buyer/list").then((rsp)=>{
            setBuyers(rsp.data);
        },(er)=>{

        })
    }
    function selectBuyer(id){
        console.warn("fucntion called",buyers[id-1])
        let item=buyers[id-1];
            setName(item.name);
            setEmail(item.email);
            setNumber(item.number);
            setUserId(item.id);
    }
    function updateBuyers(){
        let item={name,email,number,userId}
        fetch("http://127.0.0.1:8000/api/bupdate/"+userId,{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(item)
        }).then((result)=>{
            result.json().then((rsp)=>{
                console.warn(rsp)
                getBuyers()
            })
    })
    }
    return(
        <div>
            <button onClick={loadData}>Load Data</button>
                    <table border="1" style={{float: 'left'}}>
                        <tbody>
                        <tr>
                            <td>Buyer Id</td>
                            <td>Buyer Name</td>
                            <td>Email</td>
                            <td>Number</td>
                            <td>Destination</td>
                            <td>Action</td>
                        </tr>
                        {
                            buyers.map((buyers)=>
                            <tr>
                            <td>{buyers.id}</td>
                            <td>{buyers.name}</td>
                            <td>{buyers.email}</td>
                            <td>{buyers.number}</td>
                            <td>{buyers.destination}</td>
                            <td><button onClick={()=>selectBuyer(buyers.id)}>UPDATE</button></td>
                        </tr>
                            )
                        }
                        </tbody>
                    </table>

                <div border="1" align={""}>
                    <h4>{msg}</h4>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} /> <br/><br/>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} /> <br/><br/>
                    <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)} /> <br/><br/>
                    <button onClick={updateBuyers}>Update Buyer</button>
                </div>
                
            
        </div>
    )
}
export default BuyerList;