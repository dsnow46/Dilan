import React from "react";
import Data from "./Wrestlers.json";

function Box(props){
  let list = Data.map(item =>{
    return (
      <div className="container">
        <h1>{item.firstName} {item.lastName}</h1>
        <img src={item.img} className="pictures"/>
        <h3>{item.phone}</h3>
      </div>
    )
  })
  return list;

  function list2(){
    let list = Box(Data)
  return list
  }
}


export default Box;
