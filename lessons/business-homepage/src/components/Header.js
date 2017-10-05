import React from "react";

function Header() {
  return(
    <div id='cssmenu'>
    <ul>
       <li class='active'><a href='#'><span>Home</span></a></li>
       <li><a href='#'><span>Info</span></a></li>
       <li><a href='#'><span>What We Do</span></a></li>
       <li class='last'><a href='#'><span>Contact</span></a></li>
    </ul>
    </div>
  )
}

export default Header;
