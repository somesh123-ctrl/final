import React from "react";
import { Link } from "react-router-dom";
import "../../StyleSheet/MobileNavBar.css";
import logo from "../../images/logo.png";

const MobileNavBar = () => {
  return (
    <div className="MobileNav__container">
      <Link to="/" className="Logo__container">
        <img src={logo} alt="Company-Logo" />
      </Link>
    </div>
  );
};

export default MobileNavBar;