import React from "react";

function VacationComponent (props) {
  return (
          <div className="container">
              <h1 className="place">{props.place}</h1>
              <h3 className="price">{props.price}</h3>
              <h3 className="timeToGo">{props.timeToGo}</h3>
              <img src={props.image} className="pictures"/>
          </div>
      )
}

export default VacationComponent;
