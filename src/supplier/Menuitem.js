import {Link} from 'react-router-dom';
import "../Mystyle.css";
const MenuItem=({url,value})=>{
    return (
        <Link to={url}>{value}</Link>
    )
}
export default MenuItem;