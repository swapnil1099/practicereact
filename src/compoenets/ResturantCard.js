function ResturantCard({resData}){
 

  return (
    <div className="m-4 p-4 w-[200px] h-[500px] rounded-lg bg-gray-100 ">
    <img  className="rounded-lg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/"+resData.info.cloudinaryImageId} alt="res-logo"/>
      <h4 className="py-4 font-bold text-lg">{resData.info.name}</h4>
      <h5>{resData.info.cuisines.join(" , ")}</h5>
      <h5 className="font-semibold">Rating:{resData.info.avgRating} stars</h5>
      <p className="font-semibold">DeliveryTime:{resData.info.sla.deliveryTime}</p>
      <p className="font-semibold">costForTwo:{resData.info.costForTwo}</p>
    </div>
  );
};

export default ResturantCard;