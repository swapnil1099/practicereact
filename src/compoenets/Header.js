import { useState } from "react";

const Header = () => {
    const [message,setMessage]=useState("login");
    return (
        <div className='Header'>
            <div className="logo">
                <img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQEAAADECAMAAACoYGR8AAABaFBMVEX"} alt="" />
            </div>
            <div className="Navitems">
              <ul >
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
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
