import React from 'react'
import useResturantMenu from '../utils/useResturantMenu';
import Shimmer from './Shimmer';
import { useParams } from 'react-router';
import ResturantCategory from './ResturantCategory';
const ResturantMenu = () => {
  //const [resinfo,stateresinfo]=useState([]);

  const { resId } = useParams();



  const resinfo = useResturantMenu(resId);

  //const cardlink="https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5304303&lng=73.8567437&restaurantId=";



  if (resinfo.length !== 0) {
    var { name, costForTwoMessage, cuisines } = resinfo?.data?.cards[2]?.card?.card?.info;
    // var { itemCards } = resinfo.data.cards[5].groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card;
  //  console.log(resinfo.data.cards[5].groupedCard?.cardGroupMap?.REGULAR.cards)
  var categories=resinfo.data.cards[5].groupedCard?.cardGroupMap?.REGULAR.cards.filter((c)=>c.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

  // console.log(categories)
   

  }
  
  
 






  return resinfo.length === 0 ? <Shimmer /> : (

    <div >
      <div className="text-center">
        {/* <img alt='menuphoto' className='m-4 p-4 size-40' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/" + cloudinaryImageId} ></img> */}
        <h1 className='m-4 p-4 font-bold text-2xl'>{name}</h1>

        <h2 className='font-bold'>{cuisines.join(" ,")}  {costForTwoMessage}</h2>

        {/* //categories accourding */}

        {categories.map((category)=>{ return <ResturantCategory data={category?.card?.card} key={category.card.card.title}/>})}

       

     



      </div>
    </div>
  )
}

export default ResturantMenu
