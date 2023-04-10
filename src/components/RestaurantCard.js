import { CND_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name, avgRating, cuisines, costForTwoString, deliveryTime, cloudinaryImageId} = resData?.data;

    return(
        <div className="res-card">
            <img className="res-logo" src={CND_URL + cloudinaryImageId }/>
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{costForTwoString}</h5>
            <h5>{avgRating} star</h5>
            <h5>{deliveryTime}</h5>
        </div>
    );
};

export default RestaurantCard;