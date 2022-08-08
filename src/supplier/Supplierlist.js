import { useState, useEffect } from "react";
import axiosConfig from './axiosConfig';
import 'antd/dist/antd.css';
import { Button } from "antd";
const SupplierList=()=>{
    const[suppliers,setSuppliers] = useState([]);
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[userId, setUserId] = useState(null);
    useEffect(()=>{
        axiosConfig.get("supplier/get").then((rsp)=>{
        setSuppliers(rsp.data);
        },(er)=>{

        })
    },[]);
    const loadData=()=>{
        axiosConfig.get("supplier/get").then((rsp)=>{
            setSuppliers(rsp.data);
            setName(rsp[0].name)
            setEmail(rsp[0].email)
            setUserId(rsp[0].suplliers_id)
        },(er)=>{

        })
    }
    function selectUser(suplliers_id){
        console.warn("funcion called",suppliers[suplliers_id-1])
        let item=suppliers[suplliers_id-1];
            setName(item.name);
            setEmail(item.email);
            setUserId(item.suplliers_id);
    }
    function updateUser(){
        let item={name,email,userId}
        console.warn("item",item)
        fetch("http://127.0.0.1:8000/api/supdate/"+userId,{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(item)
        }).then((result)=>{
            result.json().then((rsp)=>{
                console.warn(rsp)
            })
    })
    }
    return(
        <div border="1" align={""}>
            <Button onClick={loadData}>Load Data</Button>

                    <table border="1" style={{float: 'left'}}>
                        <tbody>
                        <tr>
                            <td>Supplier ID</td>
                            <td>Supplier Name</td>
                            <td>Supplier Email</td>
                            <td>Supplier Gender</td>
                            <td>Supplier Birth</td>
                            <td>Action</td>
                        </tr>
                        {
                            suppliers.map((sp)=>
                            <tr>
                            <td>{sp.suplliers_id}</td>
                            <td>{sp.name}</td>
                            <td>{sp.email}</td>
                            <td>{sp.gender}</td>
                            <td>{sp.dob}</td>
                            <td><Button onClick={()=>selectUser(sp.suplliers_id)}>EDIT</Button></td>
                        </tr>
                            )
                        }
                        </tbody>
                    </table>
                    <div border="1" align={""}>
                        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /> <br /> <br />
                        <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /> <br />
                        <Button onClick={updateUser}>Edit User</Button>
                    </div>
        </div>
    )
}
export default SupplierList;