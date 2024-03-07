
import { cdnUrl } from "../utils/constant"
import { addItems } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {

    const dispatch=useDispatch();
    // console.log(items)
  const handleaddItem=(item)=>{
   dispatch(addItems(item));
  }
    return (
        <div>
            {items.map((item) => (


                <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">



                    <div className="w-9/12">
                        <div className="py-2">
                            <span>{item.card.info.name} </span>
                            <span> ₹
                                {

                                    item.card.info.price!==undefined ? item.card.info.price / 100 : item.card.info.defaultPrice/100
                                }
                            </span>
                            <p className="text-xs">{item.card.info.description}</p>
                        </div>



                    </div>
                    <div className="w-3/12 p-4">
                        <button className="p-2 h-10 w-16 m-4 rounded-lg bg-black text-white " onClick={()=>handleaddItem(item)}>

                            Add +
                        </button>
                        <div>
                            <img src={cdnUrl + item.card.info.imageId} alt="foodphoto" className="rounded-lg w-full" />

                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
