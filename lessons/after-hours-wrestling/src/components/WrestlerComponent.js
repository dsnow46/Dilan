import React from "react";

function WrestlerComponent(props) {
  return (
    <div className = "container" style={{ backgroundColor: props.background }}>
      <h1>{props.firstName} {props.lastName}</h1>
      <img src={props.img} className = "pictures"/>
      <h2>{props.phone}</h2>
    </div>
  )

}

export default WrestlerComponent;
