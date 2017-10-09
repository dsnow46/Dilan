import React from "react";

function SuperheroComponents(props){
  return (
      <div className="container" onClick={() => props.click(props.description)}>
        <img src={props.img} className="picture"/>
        <h1 className="text">Name: {props.name}</h1>
        <h3 className="text">Finishing Move: {props.finishing}</h3>
      </div>
  )
}

export default SuperheroComponents;
