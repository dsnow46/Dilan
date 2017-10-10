import React from "react";

function Numbers(props) {
  return(
      <div>
        <h1>Numbers: {props.value}</h1>
        <button onClick={props.addition}>Add number</button>
        <button onClick={props.subtraction}>subtract number</button>
      </div>
  )
}

export default Numbers;
