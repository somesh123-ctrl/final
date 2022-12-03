import { FETCH_HOUSE_REQUEST, FETCH_HOUSE_SUCCESS ,FETCH_HOUSE_FAIL } from "./ActionType";
import axios from "axios";

export const houseForSaleAction =() => async (dispatch) => {
    const url = "http://localhost:5000/api/house-sale";
    const production_url = "/house/sale";

    try{
        dispatch({type:FETCH_HOUSE_REQUEST});
        const {data} =await axios.get(url);
        dispatch({type: FETCH_HOUSE_SUCCESS, payload: data });


    }
    catch(error) {
dispatch({type: FETCH_HOUSE_FAIL , payload: error}) ;


    }
};



export const houseForRentAction =() => async (dispatch) => {
    const url = "http://localhost:5000/api/house-rent";
    const production_url = "/house/rent";

    try{
        dispatch({type:FETCH_HOUSE_REQUEST});
        const {data} =await axios.get(url);
        dispatch({type: FETCH_HOUSE_SUCCESS, payload: data });


    }
    catch(error) {
dispatch({type: FETCH_HOUSE_FAIL , payload: error}) ;


    }
}

