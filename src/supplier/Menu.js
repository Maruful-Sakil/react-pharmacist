import MenuItem from "./Menuitem";
const Menu=()=>{
    return (
        <div>
            {/* <MenuItem url="/" value="Home"/>
            <MenuItem url="/paragraph" value="Paragraph"/>
            <MenuItem url="/event" value="Event"/>
            <MenuItem url="/post" value="Post"/>
            <MenuItem url="/student" value="Create Stuedent"/> */}
            <MenuItem url="/list" value="Suppliers List"/><br/>
            <MenuItem url="/supplier" value="Create Supplier"/><br/>
            <MenuItem url="/product" value="Product List"/><br/>
            <MenuItem url="/buyer" value="Buyers List"/><br/>
            
        </div>
    )
}
export default Menu;