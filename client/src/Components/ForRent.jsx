import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import screenLoader from "../images/a.gif";
import houseRentAction from "../store/Actions/HouseRentAction";
import "../StyleSheet/HouseListed.css";
import { Link } from "react-router-dom";
const ForRent = () => {
  const { loading, error, rentHouses } = useSelector(
    (state) => state.rentHouses
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(houseRentAction());
  }, []);
  return (
    <div className="Houses__container">
      {loading ? (
        <img src={screenLoader} alt="Fetching-DATA" className="loadingScreen" />
      ) : error ? (
        <h1>SERVER IS CURRENTLY DOWN :</h1>
      ) : (
        <div className="Container">
          <h3>Houses To Rent</h3>
          <div className="listedHouses">
            {rentHouses.map((house) => {
              return (
                <div className="House__details" key={house._id}>
                  <div className="img-container">
                    <Link
                      to={`/house/description/${house._id}`}
                    >  
                      <img className="img"
                        src={house.house_details.house_image}
                        alt="img"
                      />
                    </Link>
                  </div>
                  <div className="House__priceAndDetails">
                    <h4 className="House__price">{`RS ${house.house_details.price}`}</h4>
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

export default ForRent;