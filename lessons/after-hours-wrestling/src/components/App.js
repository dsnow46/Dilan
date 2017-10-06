import React from "react";
import WrestlerList from "./WrestlerList";
import wrestlerArray from "./Wrestlers.json";
import "./Index.css";
function App(){
  return(
    <div>
      <WrestlerList wrestlerArray = {wrestlerArray} />
    </div>
  )
}

export default App;
