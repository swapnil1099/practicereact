
import ResturantCard from "./ResturantCard";

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [newresList, setnewresList] = useState([]);
    useEffect(()=>{
        fetchData();
    },[]);


   const fetchData=async()=>{
    const data=await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=18.5204303&lng=73.8567437")
    const json=await data.json();

    setnewresList(json.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants);
   
   }


    
    return newresList.length===0? <Shimmer/>: (
        <div className="body">
            <div className="filter">
                <button className="filter-res" onClick={() => {
                    const filterList = newresList.filter((rest) => (rest.info.avgRating > 4))
                    setnewresList(filterList);
                }}>

                    Top Rated Resto

                </button>
            </div>
            <div className="res-container">



                {newresList.map((resutrant) => (<ResturantCard resData={resutrant} key={resutrant.info.id} />))}

            </div>
        </div>
    );
};


export default Body;