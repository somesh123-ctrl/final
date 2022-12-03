import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import screenLoader from "../images/a.gif";

import "../StyleSheet/HouseListed.css";
import { Link } from "react-router-dom";
import SearchBoxAction from "../store/Actions/SearchBoxAction";
const SearchResults = () => {
  const { loading, error, searchBoxResults } = useSelector(
    (state) => state.searchBoxResult
  );
  const dispatch = useDispatch();

  const city = [
    "Limpopo",
    "Eastern Cape",
    "Western Cape",
    "Mpumalanga",
    "Northern Cape",
    "Pretoria",
    "Johannesburg",
    "Port Elizabeth",
  ];
  const query = window.location.href.split("/")[5];

  useEffect(() => {
    dispatch(SearchBoxAction(query));
  }, [query]);
  return (
    <div className="Houses__container">
      {loading ? (
        <img src={screenLoader} alt="Fetching-DATA" className="loadingScreen" />
      ) : error ? (
        <h1>SERVER IS CURRENTLY DOWN :(</h1>
      ) : (
        <div className="Container">
          <h3>Search Results</h3>
          <div className="listedHouses">
            {searchBoxResults.map((house) => {
              return (
                <div className="House__details" key={house._id}>
                  <div className="img-conatiner">
                    <Link
                      to={`/house/${house.house_location.city}/${house._id}`}
                    >
                      <img className="img"
                        src={house.house_details.house_image}
                        alt="House"
                      />
                    </Link>
                  </div>
                  <div className="House__priceAndDetails">
                    <h4 className="House__price">{`R${house.house_details.price}`}</h4>
                    <h4 className="House__snipDescription">{`${house.house_details.numOfBedRooms} Bedroom house for sale in ${house.house_location.city}`}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResults;