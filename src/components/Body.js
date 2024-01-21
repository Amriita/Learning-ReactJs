import { RestaurantList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState(RestaurantList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofRestaurants.filter(
              (res) => res.info.avgRating >= 4.3
            );
            setlistofRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listofRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
