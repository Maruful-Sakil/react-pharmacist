import { useState, useEffect } from "react";
import axiosConfig from './axiosConfig';
const SupplierList=()=>{
    const[suppliers,setSuppliers] = useState([]);
    const loadData=()=>{
        axiosConfig.get("supplier/get").then((rsp)=>{
            setSuppliers(rsp.data);
        },(er)=>{

        })
    }
    return(
        <div>
            <button onClick={loadData}>Load Data</button>
            
                {
                    suppliers.map((sp)=>
                    <table border={1} align={"center"}>
                        <tr>
                            <td>Supplier Name</td>
                            <td>Supplier Email</td>
                            <td>Supplier Gender</td>
                            <td>Supplier Birth</td>
                        </tr>
                        <tr>
                            <td>{sp.name}</td>
                            <td>{sp.email}</td>
                            <td>{sp.gender}</td>
                            <td>{sp.dob}</td>
                        </tr>
                    </table>
                    
                    )
                }
            
        </div>
    )
}
export default SupplierList;