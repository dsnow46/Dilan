import React from "react";

function Monkey(props){
  return(
  <div>
    <input onChange={props.handleChange}
           value={props.label}
           type="text"/>
    <h1>{props.label}</h1>
    <button onClick={props.handleClick}>Ayeo</button>
  </div>
  )
}

export default Monkey;
