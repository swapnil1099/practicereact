import { useEffect, useState } from "react";
const useResturantMenu = (resId) => {
  const [resinfo, stateresinfo] = useState([]);
  // eslint-disable-next-line
  useEffect(() => {
    fetchMenu();
  }, []);

  async function fetchMenu() {
    const datajson = await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5304303&lng=73.8567437&restaurantId=" + resId);

    const data = await datajson.json();


    stateresinfo(data);


  }


  return resinfo;

}

export default useResturantMenu;