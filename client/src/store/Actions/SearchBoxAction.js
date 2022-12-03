import { FETCH_HOUSE_FAIL, FETCH_HOUSE_REQUEST, FETCH_HOUSE_SUCCESS } from "./ActionType";

  import axios from "axios";
  const SearchBoxAction = (search) => async (dispatch) => {
    const dev_url = `http://localhost:5000/api/house-search/${search}`;
    const production_url = `/api/house-search/${search}`;
    try {
      dispatch({ type: FETCH_HOUSE_REQUEST });
      const { data } = await axios.get(production_url);
      dispatch({ type: FETCH_HOUSE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_HOUSE_FAIL });
    }
  };

  export default SearchBoxAction;