import React, { useState } from 'react'
import { useEffect } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router';
const ResturantMenu = () => {
const [resinfo,stateresinfo]=useState([]);

const {resId}=useParams();
console.log(resId)

  useEffect(()=>{
    fetchMenu();
  });


//const cardlink="https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5304303&lng=73.8567437&restaurantId=";

 async function fetchMenu(){
   const datajson = await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5304303&lng=73.8567437&restaurantId="+resId);
 
   const data=await datajson.json();

   stateresinfo(data);

  
 }
 
if(resinfo.length!==0){
  var {name,cloudinaryImageId,costForTwoMessage,cuisines}=resinfo?.data?.cards[2]?.card?.card?.info;
  var {itemCards} =resinfo.data.cards[5].groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card;

}


 



  return resinfo.length===0?<Shimmer/>:(
    
    <div className='Menucard'>
      <img alt='menuphoto' className='photocardmenu' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/"+cloudinaryImageId} ></img>
      <h1>{name}</h1>

      <h2>{cuisines.join(" ,")}</h2>
      
      <h3>{costForTwoMessage}</h3>
        <h3>Menu</h3>

      <ul>
      {itemCards?.map((item) => (
    <li key={item.card.info.id}>{item.card.info.name} - ₹ {item.card.info.price / 100}</li>
))}
        
      </ul>


      
    </div>
  )
}

export default ResturantMenu
