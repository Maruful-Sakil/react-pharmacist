import MenuItem from "./Menuitem";
import "../Mystyle.css";
const Menu=()=>{
    return (
        <div>
            {/* <MenuItem url="/" value="Home"/>
            <MenuItem url="/paragraph" value="Paragraph"/>
            <MenuItem url="/event" value="Event"/>
            <MenuItem url="/post" value="Post"/>
            <MenuItem url="/student" value="Create Stuedent"/> */}
            <MenuItem url="/list" value="SuppliersList    "/>
            <MenuItem url="/supplier" value="    Registration    "/>
            <MenuItem url="/product" value="    ProductList    "/>
            <MenuItem url="/buyer" value="    BuyersList"/>
            
        </div>
    )
}
export default Menu;