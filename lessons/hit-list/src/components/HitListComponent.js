import React from "react";

function HitListComponent(props){
  return(
    <div className="container">
      <img src={props.image} className="image"/>
      <h1 className="name">{props.name}</h1>
    </div>
  )
}

export default HitListComponent;
