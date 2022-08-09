import Menu from "./Menu";
import "../Mystyle.css";
import SupplierList from "./Supplierlist";
import CreateSupplier from "./CreateSupplier";
import ProductList from "./Productlist";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import BuyerList from "./Buyerlist";
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
                    <Route path="/list" element={<SupplierList/>} />
                    <Route path="/supplier" element={<CreateSupplier/>} />
                    <Route path="/product" element={<ProductList/>} />
                    <Route path="/buyer" element={<BuyerList/>} />
                </Routes>
            </BrowserRouter>
            
            
        </div>
    )
}
export default Main;