import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
    const [message,setMessage]=useState("login");
    return (
        <div className='Header'>
            <div className="logo">
                <img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQEAAADECAMAAACoYGR8AAABaFBMVEX"} alt="" />
            </div>
            <div className="Navitems">
              <ul >
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About us</Link></li>
                <li><Link to={"/Contact"}>Contact us</Link></li>
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
