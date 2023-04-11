import RestaurantCard from "./RestaurantCard";
import {apiResData} from "../utils/mockdata";
import { useState } from "react";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(apiResData);
    return(
        <div className="body">
            <div className="filter">
                <button type="button" className="filter-btn" onClick={() => {
                    const filteredListOfRes = listOfRestaurants.filter(
                        (res) => res.data.avgRating >= 4
                    );
                    setListOfRestaurants(filteredListOfRes);
                }}
            >Filter Restaurants</button>
            <button type="button" className="reset-btn" onClick={() => {
                    setListOfRestaurants(apiResData);
                }} 
            > Reset Filter</button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map((resCard) => (
                        <RestaurantCard resData= {resCard}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Body;