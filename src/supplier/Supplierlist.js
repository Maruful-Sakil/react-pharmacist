import { useState, useEffect } from "react";
import axios from "axios";
const SupplierList=()=>{
    const[suppliers,setSuppliers] = useState([]);
    const loadData=()=>{
        axios.get("http://127.0.0.1:8000/api/supplier/get").then((rsp)=>{
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