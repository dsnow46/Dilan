import React from "react";
import {Switch, Route} from "react-router-dom";
import Service from "./views/Service";

function ServicesComponent(props){
  const styles ={
    display: "flex",
    flexDirection: "column",
    width: "50%",
    justifyContent: "space-between",
    margin: "auto"
  }
  let searchById = props.searchById;
    return(
      <div>
      <div style={styles}>
        {props.genLinks()}
      </div>
        <div>
          <Switch>
            <Route path="/services/:id" render={(props)=>{

              return  (
                <Service searchById={searchById}{...props}/>
              )
            }}/>
            </Switch>
        </div>
      </div>
  )
}

export default ServicesComponent;
