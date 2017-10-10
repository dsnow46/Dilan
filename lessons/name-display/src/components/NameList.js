import React from "react";

function NameList(props){
  return(
    <ol className="ol">
      {props.names.map((names) => <li>{names}</li>)}
    </ol>
  )
}

export default NameList;
