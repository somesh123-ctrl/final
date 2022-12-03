import React from 'react'
import logo from "../../images/logo.png";
import "../../StyleSheet/DesktopNavBar.css";
import {Link} from 'react-router-dom';

const DesktopNavBar = () => {
    return (
        <div className="DesktopNav__container">
         
         <div className="DesktopNavLeft__container">

             <img src={logo} alt="Company Logo" className="logo"/>
         </div>
   
        <div className="DesktopNavRight__container">
        <Link to="/" style={{textDecoration:"none", color:"black" ,marginRight:"2em" }}><h3>Home</h3></Link>  

          <Link to="/house-sale" style={{textDecoration:"none", color:"black" ,marginRight:"2em" }}><h3>For Sale</h3></Link>  
          <Link to="/house-rent" style={{textDecoration:"none", color:"black" ,marginRight:"2em" }}><h3>To Rent</h3></Link>  

           <Link to="/list-your-property" style={{textDecoration:"none", color:"black" ,marginRight:"2em"  }} > <h3>Sell Your Property</h3> </Link>
           
           <Link to="/contact-us" style={{textDecoration:"none", color:"black" ,marginRight:"2em"  }} > <h3>Contact Us</h3> </Link>
  
        </div>
        


        </div>
    )
}

export default DesktopNavBar
