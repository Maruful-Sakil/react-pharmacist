import { useState, useEffect } from "react";
import axiosConfig from './axiosConfig';
const BuyerList=()=>{
    const[buyers,setBuyers] = useState([]);
    const loadData=()=>{
        axiosConfig.get("buyer/list").then((rsp)=>{
            setBuyers(rsp.data);
        },(er)=>{

        })
    }
    return(
        <div>
            <button onClick={loadData}>Load Data</button>
            
                {
                    buyers.map((buyers)=>
                    <table border={1} align={"center"}>
                        <tr>
                            <td>Buyer Id</td>
                            <td>Buyer Name</td>
                            <td>Email</td>
                            <td>Number</td>
                            <td>Destination</td>
                        </tr>
                        <tr>
                            <td>{buyers.id}</td>
                            <td>{buyers.name}</td>
                            <td>{buyers.email}</td>
                            <td>{buyers.number}</td>
                            <td>{buyers.destination}</td>
                        </tr>
                    </table>
                    
                    )
                }
            
        </div>
    )
}
export default BuyerList;