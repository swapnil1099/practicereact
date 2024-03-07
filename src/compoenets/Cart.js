import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
    const cartItems = useSelector((store) => store.cart.item);
    const dispatch=useDispatch();
    const handelClearCart=()=>{
        dispatch(clearCart())
    }
    return (
        <div className="text-center m-4 p-4">
        <div>
        <h1 className="text-2xl font-bold">Cart Items : {cartItems.length}</h1>
         <button className=" m-4 p-2 bg-black text-white rounded-lg" onClick={handelClearCart} >ClearCart</button>   
        </div>

          <div className="m-4 p-4">
          {cartItems.length===0 ? <h1 className="text-2xl font-bold">CartItem is Empty {"😔"} Plz add into Cart</h1> :<ItemList items={cartItems} />}
          
          </div>
        </div>
    )
}

export default Cart;