function ResturantCard({resData}){
 

  return (
    <div className="rescard">
    <img  className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/"+resData.info.cloudinaryImageId} alt="res-logo"/>
      <h4>{resData.info.name}</h4>
      <h5>{resData.info.cuisines.join(" , ")}</h5>
      <h5>Rating:{resData.info.avgRating} stars</h5>
      <p>DeliveryTime:{resData.info.sla.deliveryTime}</p>
      <p>costForTwo:{resData.info.costForTwo}</p>
    </div>
  );
};

export default ResturantCard;