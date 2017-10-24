import React from "react";
import {connect} from "react-redux";
import Contact from "./Contact";
import {removeFirstContact} from "../../redux/actions/index.js";



function ContactList(props){
  console.log(props);
  return(
    <div>
    <button onClick={props.removeFirstContact}>remove first contact</button>
      {props.contactList.map((contact, i)=>{
        return <Contact key={contact.firstName + i}contact={contact}/>
      })}
    </div>
  )
}
const mapStateToProps = (state)=>{
  return state
}

export default connect(mapStateToProps, {removeFirstContact: removeFirstContact})(ContactList);
