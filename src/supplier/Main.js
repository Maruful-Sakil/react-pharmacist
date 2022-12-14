import Menu from "./Menu";
import "../Mystyle.css";
import SupplierList from "./Supplierlist";
import CreateSupplier from "./CreateSupplier";
import ProductList from "./Productlist";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import BuyerList from "./Buyerlist";
import Login from "./Login";
import Logout from "./Logout";
const Main = ()=>{
    return (
        <div>
            <BrowserRouter>
                <Menu></Menu>
                <Routes>
                    {/* <Route path="/" element={<Form></Form>} />
                    <Route path="/paragraph" element={<Par/>} />
                    <Route path="/event" element={<EventHandle/>} />
                    <Route path="/post" element={<Post/>} />
                    <Route path="/supplier" element={<CreateStudent/>} /> */}
                    <Route path="/supplier" element={<CreateSupplier/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/list" element={<SupplierList/>} />
                    <Route path="/product" element={<ProductList/>} />
                    <Route path="/buyer" element={<BuyerList/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/logout" element={<Logout/>} />
                </Routes>
            </BrowserRouter>
            
            
        </div>
    )
}
export default Main;