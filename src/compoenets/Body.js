
import ResturantCard from "./ResturantCard";

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [newresList, setnewresList] = useState([]);
    const [searchText, SetSearchText] = useState("");
    const [list,setList]=useState([]);
    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=18.5204303&lng=73.8567437")
        const json = await data.json();
        setList(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
        setnewresList(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);

    }



    return newresList.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search-box">
                    <input className="search-box" value={searchText} onChange={(e) => {
                        SetSearchText(e.target.value)
                    }} />
                    <button className="search-bt" onClick={() => {
                        const searchlist = list.filter((res1) => (res1.info.name.toLowerCase().includes(searchText.toLowerCase())));
                        setnewresList(searchlist);

                    }}>search</button>

                </div>
                <div className="filter-div">
                    <button className="filter-res" onClick={() => {
                        const filterList = newresList.filter((rest) => (rest.info.avgRating > 4))
                        setnewresList(filterList);
                    }}>

                        Top Rated Resto

                    </button>

                </div>
            </div>
            <div className="res-container">



                {newresList.map((resutrant) => (<ResturantCard resData={resutrant} key={resutrant.info.id} />))}

            </div>
        </div>
    );
};


export default Body;