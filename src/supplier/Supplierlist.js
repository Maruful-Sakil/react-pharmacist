import { useState, useEffect } from "react";
import axiosConfig from './axiosConfig';
const SupplierList=()=>{
    const[suppliers,setSuppliers] = useState([]);
    useEffect(()=>{
        axiosConfig.get("supplier/get").then((rsp)=>{
        setSuppliers(rsp.data);
        },(er)=>{

        })
    },[]);
    const loadData=()=>{
        axiosConfig.get("supplier/get").then((rsp)=>{
            setSuppliers(rsp.data);
        },(er)=>{

        })
    }
    return(
        <div>
            <button onClick={loadData}>Load Data</button>

                    <table border="1" style={{float: 'left'}}>
                        <tbody>
                        <tr>
                            <td>Supplier Name</td>
                            <td>Supplier Email</td>
                            <td>Supplier Gender</td>
                            <td>Supplier Birth</td>
                        </tr>
                        {
                            suppliers.map((sp)=>
                            <tr>
                            <td>{sp.name}</td>
                            <td>{sp.email}</td>
                            <td>{sp.gender}</td>
                            <td>{sp.dob}</td>
                        </tr>
                            )
                        }
                        </tbody>
                    </table>
        </div>
    )
}
export default SupplierList;