import React from "react";

function NameComponent(props) {
  return(
    <div>
      <input onChange={props.handleChange}
             value={props.label}
             type ="text"
             className="input"/>
      <button className="button" onClick={props.handleClick}>ADD NAME</button>
      <h1 className="name">Name++</h1>
    </div>

  )
}

export default NameComponent;
