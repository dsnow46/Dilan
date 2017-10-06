import React from "react";

function Header() {
  return(
    <div id='cssmenu'>
    <ul>
       <li className='active'><a href='#'><span>Home</span></a></li>
       <li><a href='#'><span>Info</span></a></li>
       <li><a href='#'><span>What We Do</span></a></li>
       <li className='last'><a href='#'><span>Contact</span></a></li>
    </ul>
    </div>
  )
}

export default Header;
