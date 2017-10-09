import React from "react";
import SuperheroComponents from "./SuperheroComponents";

function handleClick(e){
  alert(e);
}

function Superhero(props){
      return props.Superheros.map((item) => {
        return <SuperheroComponents img={item.img}
                                    name={item.name}
                                    finishing={item.finishing}
                                    description={item.description}
                                    click={handleClick}/>
      });
      return Superhero;
}

export default Superhero;
