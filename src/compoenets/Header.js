import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [message, setMessage] = useState("login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(userContext);
  const cartItems=useSelector((store)=>store.cart.item);
// console.log(cartItems);
  return (
    <div className='flex justify-between bg-pink-50'>
      <div className="w-40">
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdlUpdpkf-B7kZzgoplqW8pFcL5Ln8CGJf5A&usqp=CAU"} alt="" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-8 m-4">
          <li className="px-4 font-bold">Online Status:{onlineStatus === false ? "❌" : "✅"}</li>
          <li className="px-4 font-bold"><Link to={"/"}>Home</Link></li>
          <li className="px-4 font-bold"><Link to={"/about"}>About</Link></li>
          <li className="px-4 font-bold"> <Link to={"/Contact"}>Contact</Link></li>
          <li className="px-4 font-bold"><Link to={"/grocery"}>Grocary</Link></li>
          <li className="px-4 font-bold ">{"🛒"} {cartItems.length}</li>
          <button className="px-4 font-bold" onClick={() => (
            message === loggedInUser ? setMessage("logout") : setMessage(loggedInUser)
          )}>{message}</button>

        </ul>

      </div>

    </div>
  );
}

export default Header;
