import {createStore, combineReducers ,applyMiddleware , compose} from 'redux';
import thunk from 'redux-thunk';
import { HouseForRentReducer, HouseForSaleReducer } from './Reducers/HouseFetchReducer';
import rentReducer from "./Reducers/houseRentReducer";
import houseDescriptionReducer from "./Reducers/houseDescriptionReducer";
import searchBoxReducer from "./Reducers/SearchBoxReducer";
import filterSearchReducer from "./Reducers/filterSearchReducer";


const initialState={} ;

const reducer = combineReducers ({
    housesForSale: HouseForSaleReducer,
    housesForRent: HouseForRentReducer,
    rentHouses: rentReducer,
    houseDescription: houseDescriptionReducer,
    filterSearchResult: filterSearchReducer,
    searchBoxResult: searchBoxReducer,
    
  });

  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
  );

  export default store;
  
  
