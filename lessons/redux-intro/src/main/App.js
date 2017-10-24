import React from "react";
import Counter from "./Counter";
import ContactList from "./Contacts/ContactList"


function App(){
  const style = {
    height: "50%"
  }
    return(
    <div style={style}>
      <Counter />
      <ContactList />
    </div>
  )
}

export default App;

//make a list componenet
  //from list componenet we need to get contact list from redux
  //with our list we need to map through list and render an item componenet for each contact

//make an item componenet
  //display itme info
