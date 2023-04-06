import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return(
        <div className="header-container">
            <div className="logo-container">
                <img className="logo" src="https://static.vecteezy.com/system/resources/previews/006/395/395/original/food-point-logo-symbol-and-icon-template-to-show-the-location-of-the-food-seller-vector.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const RestaurantCard = () => {
    return(
        <div className="res-card">
            <img className="res-logo" src="https://b.zmtcdn.com/data/pictures/chains/8/19937288/b8f98cd0239c1792920ffd087a83f9fa_o2_featured_v2.jpg?output-format=webp" />
            <h3>Pista House</h3>
            <h5>Biryani, Haleem, Paya, Chiken</h5>
            <h5>3.8 star</h5>
            <h5>20 minutes</h5>
        </div>
    );
}

const Body = () => {
    return(
        <div className="body">
            <div className="search">
                search
            </div>
            <div className="res-container">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    );
};

const AppContainer = () => {
    return(
        <div className="app-container">
            <div className="header">
                <Header/>    
            </div>
            <div className="body">
                <Body/>    
            </div>    
        </div>
        
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppContainer />);