import { useState, useEffect } from "react";
import axiosConfig from './axiosConfig';
const ProductList=()=>{
    const[products,setProducts] = useState([]);
    const loadData=()=>{
        axiosConfig.get("product/list").then((rsp)=>{
            setProducts(rsp.data);
        },(er)=>{

        })
    }
    function deleteUser(product_id){
        fetch("http://127.0.0.1:8000/api/delete/"+product_id,{
            method:'DELETE'
        }).then((result)=>{
            result.json().then((rsp)=>{
                console.warn(rsp)
            })
    })
    }
    return(
        <div>
            <button onClick={loadData}>Load Data</button>
            
                {
                    products.map((prod)=>
                    <table border={1} align={""}>
                        <tr>
                            <td>Product Id</td>
                            <td>Product Name</td>
                            <td>Price</td>
                            <td>Categiry</td>
                            <td>Quantity</td>
                            <td>Action</td>
                        </tr>
                        <tr>
                            <td>{prod.product_id}</td>
                            <td>{prod.pname}</td>
                            <td>{prod.price}</td>
                            <td>{prod.category}</td>
                            <td>{prod.quantity}</td>
                            <td><button onClick={()=>deleteUser(prod.product_id)}>DELETE</button></td>
                        </tr>
                    </table>
                    
                    )
                }
            
        </div>
    )
}
export default ProductList;