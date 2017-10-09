import React from "react";
import Vacation from "./components/Vacation"
import VacationList from "./components/VacationList";
import "./components/Vacation.css";

function App () {
  return (
    <div>
      <Vacation VacationList = {VacationList} />
    </div>
  )
}

export default App;
