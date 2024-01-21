import { RestaurantList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn">Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {RestaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
