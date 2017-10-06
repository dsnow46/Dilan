import React from "react";
import WrestlerComponent from "./WrestlerComponent"


function WrestlerList(props){
  let wrestlerArray = props.wrestlerArray.map((wrestler, i) =>{
     let color = i % 2 === 0 ?color = "lightblue":"red";
    return <WrestlerComponent firstName={wrestler.firstName}
                              lastName={wrestler.lastName}
                              phone={wrestler.phone}
                              img={wrestler.img}
                              key={i}
                              background={color}/>

  });
  return wrestlerArray
}

export default WrestlerList;
