import React from 'react'
import Banner from './Components/Banner';
import NavBar from './Components/Header/NavBar'
import "./StyleSheet/App.css";
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import HouseListingForm from './Components/HouseListingForm';
import ForSale from './Components/ForSale';
import ForRent from './Components/ForRent';
import SearchBar from './Components/SearchBar';

import HouseDescription from './Components/HouseDescription';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer';
import MainContent from './Components/MainContent';
import SearchResults from './Components/SearchResults';
import FilterSearchResults from './Components/FilterSearch';
const App = () => {
    return (
        <Router>
            <NavBar/>
            <Switch>


            <Route path="/house/description/:id">
                  <HouseDescription/>
                </Route>

                <Route path="/contact-us">
          <ContactForm/>
        </Route>

                <Route path="/house-sale">
                    
                    <ForSale/>
                </Route>

                <Route path="/house-rent">
                    <ForRent/>
                </Route>
                
                <Route path="/search/results-location/:location">
          <FilterSearchResults/>
        </Route>



                <Route path="/house/search/:query">
          <SearchResults/>
        </Route>
                
                <Route path="/list-your-property">
                    <HouseListingForm/>
                    </Route>


<Route to="/">
          <SearchBar/>
          <Banner />
          <MainContent/>
          <Footer/>
        </Route>
               




                
            </Switch>
        </Router>
    )
}

export default App
