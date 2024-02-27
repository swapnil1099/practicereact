import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
    const [message,setMessage]=useState("login");
    const onlineStatus=useOnlineStatus();
    return (
        <div className='Header'>
            <div className="logo">
                <img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQEAAADECAMAAACoYGR8AAABaFBMVEX"} alt="" />
            </div>
            <div className="Navitems">
              <ul >
              <li>Online Status:{onlineStatus===false ?"❌":"✅"}</li>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About us</Link></li>
                <li><Link to={"/Contact"}>Contact us</Link></li>
                <li><Link to={"/grocery"}>Grocary</Link></li>
                <li>Cart Item</li>
                <button  className="login-button" onClick={()=>(
                   message==="login"?setMessage("logout"):setMessage("login")
                )}>{message}</button>
                
              </ul>

            </div>

        </div>
    );
}

export default Header;
