import ResturantCard from "./ResturantCard";
import resList from "./resList";

const Body = () => {
    return (
        <div className="body">
            <div className="serch">
           <h5>serch</h5>
            </div>
            <div className="res-container">
            
        
               
              {resList.map((resutrant)=>(<ResturantCard resData={resutrant} key={resutrant.info.id}/>))}
               
            </div>
        </div>
    );
};


export default Body;