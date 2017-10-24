import React from "react";
import {Link} from "react-router-dom";


function Navbar(props){
    return(
      <div className="nav">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to="/party">FUN PARTY TIME!</Link>
      </div>
    )
}

export default Navbar;
