import React from 'react'
import useResturantMenu from '../utils/useResturantMenu';
import Shimmer from './Shimmer';
import { useParams } from 'react-router';
const ResturantMenu = () => {
  //const [resinfo,stateresinfo]=useState([]);

  const { resId } = useParams();



  const resinfo = useResturantMenu(resId);

  //const cardlink="https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5304303&lng=73.8567437&restaurantId=";



  if (resinfo.length !== 0) {
    var { name, cloudinaryImageId, costForTwoMessage, cuisines } = resinfo?.data?.cards[2]?.card?.card?.info;
    var { itemCards } = resinfo.data.cards[5].groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card;

  }






  return resinfo.length === 0 ? <Shimmer /> : (

    <div className="m-4 p-4 w-50% rounded-lg bg-gray-100 ">
      <img alt='menuphoto' className='m-4 p-4 size-30' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/" + cloudinaryImageId} ></img>
      <h1 className='m-4 p-4 px-20 font-bold'>{name}</h1>

      <h2 >{cuisines.join(" ,")}</h2>

      <h3>{costForTwoMessage}</h3>
      <h3>Menu</h3>

      <ul>

        {itemCards?.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name} - ₹ {(item.card.info.price / 100) || 299}</li>
        ))}

      </ul>



    </div>
  )
}

export default ResturantMenu
