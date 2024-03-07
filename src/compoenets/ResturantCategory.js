// import { useState } from "react";
import ItemList from "./ItemList";

const ResturantCategory = ({data,showItems,setShowIndex}) => {
    // console.log(data.itemCards);
    // const [showItems,setShowItem]=useState(false);

    const handelClick=()=>{
        setShowIndex();
    };
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
    <div className="flex justify-between cursor-pointer"
    onClick={handelClick}>
        <span className="font-bold">{data.title} ({data.itemCards.length})</span>
        <span>{"🔽"}</span>


 
    </div>
      {/* Header and accouridng body i need to write  */}
      {/* <h1>{data}</h1> */}
       {
        showItems && <ItemList items={data.itemCards}

        />
       }
    </div>
  )
}

export default ResturantCategory
