import Menu from "./Menu";
import SupplierList from "./Supplierlist";
import CreateSupplier from "./CreateSupplier";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
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
                </Routes>
            </BrowserRouter>
            
            
        </div>
    )
}
export default Main;