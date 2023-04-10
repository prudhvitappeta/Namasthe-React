import RestaurantCard from "./RestaurantCard";
import {apiResData} from "../utils/mockdata";

const Body = () => {
    return(
        <div className="body">
            <div className="search">
                search
            </div>
            <div className="res-container">
                {
                    apiResData.map((resCard) => (
                        <RestaurantCard resData= {resCard}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Body;