import React from "react";


function Service(props){
  const serviceInfo = props.searchById(props.match.params.id)
  return(
    <div>
      <h3>{serviceInfo.title}</h3>
      <p>`$${serviceInfo.price}`</p>
    </div>
  )
}
export default Service;
