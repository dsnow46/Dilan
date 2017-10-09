import React from "react";
import VacationComponent from "./VacationComponent";
import VacationList from "./VacationList";


function Vacation(props){
  let VacationList = props.VacationList.map(item => {
    return <VacationComponent place={item.place}
                              price={item.price}
                              timeToGo={item.timeToGo}
                              image={item.image}/>
  });
  return VacationList;
}

export default Vacation;
