import { useState, useEffect } from "react";
import axios from "axios";
const ProductList=()=>{
    const[products,setProducts] = useState([]);
    const loadData=()=>{
        axios.get("http://127.0.0.1:8000/api/product/list").then((rsp)=>{
            setProducts(rsp.data);
        },(er)=>{

        })
    }
    return(
        <div>
            <button onClick={loadData}>Load Data</button>
            
                {
                    products.map((prod)=>
                    <table border={1} align={"center"}>
                        <tr>
                            <td>Product Id</td>
                            <td>Product Name</td>
                            <td>Price</td>
                            <td>Categiry</td>
                            <td>Quantity</td>
                        </tr>
                        <tr>
                            <td>{prod.product_id}</td>
                            <td>{prod.pname}</td>
                            <td>{prod.price}</td>
                            <td>{prod.category}</td>
                            <td>{prod.quantity}</td>
                        </tr>
                    </table>
                    
                    )
                }
            
        </div>
    )
}
export default ProductList;