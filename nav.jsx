import React from "react";
import logo from "./assets/picture.jpg";
import "./nav.css"
const Navbar =()=> {
    return(
        <>
        
        <nav>
            <img className="logo"src={logo} alt="logo"></img>
            <a href="#" className="nav-item">Home</a>
            <a href="#" className="nav-item">Order</a>
            <a href="#" className="nav-item">Reserve Table</a>
       
        </nav>
        </>
    );
};
export default Navbar;