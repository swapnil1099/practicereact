import ResturantCard, { withPromotedLabel } from "./ResturantCard";

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [newresList, setnewresList] = useState([]);
  const [searchText, SetSearchText] = useState("");
  const [list, setList] = useState([]);

  const ResturantPromotedCard = withPromotedLabel(ResturantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const onlinestatus = useOnlineStatus();
  if (onlinestatus === false) {
    return (
      <div>
        <h1>You are offline Check Your intert connection</h1>
      </div>
    );
  }

  const fetchData = async () => {
    // const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=18.5504303&lng=73.8567437")
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=18.5742377&lng=73.9256948",
    );
    const json = await data.json();
    setList(
      json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setnewresList(
      json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    // console.log(json)
    // setList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    // setnewresList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  return newresList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="search m-4 p-4">
          <input
            className="border border-solid border-black m-4 py-1 rounded-lg"
            value={searchText}
            onChange={(e) => {
              SetSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 m-4 bg-green-100 rounded-lg"
            onClick={() => {
              const searchlist = list.filter((res1) =>
                res1.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );

              setnewresList(searchlist);
            }}
          >
            search
          </button>
        </div>

        <div className="search m-4 p-4">
          <button
            className="px-4 py-1 m-4 bg-gray-100 rounded-lg"
            onClick={() => {
              const filterList = newresList.filter(
                (rest) => rest.info.avgRating > 4,
              );
              setnewresList(filterList);
            }}
          >
            Top Rated Resto
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {newresList.map((restaurant) => (
          <Link
            to={"/resturants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.promoted === true ? (
              <ResturantPromotedCard resData={restaurant} />
            ) : (
              <ResturantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
