import React from "react";
import {addOne} from "../redux/actions/index.js";
import {minusOne} from "../redux/actions/index.js";
import {multFive} from "../redux/actions/index.js";
import {minusOneHundred} from "../redux/actions/index.js";
import {reset} from "../redux/actions/index.js";
import {connect} from "react-redux";

function Counter(props){
  console.log(props)
  const style = {
    width: "15%",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    fontSize: "120px",
    top: "50%",
    transform: "translateY(-50%)"
  }
  return(
    <div style={style}>
      <span>{props.counter}</span>
      <button className="button" onClick={props.addOne}>+</button>
      <button className="button" onClick={props.multFive}>*5</button>
      <button className="button" onClick={props.minusOne}>-</button>
      <button className="button" onClick={props.minusOneHundred}>-100</button>
      <button className="button" onClick={props.reset}>reset</button>
    </div>
  )
}
//connect dispatch with action creators
  //connect takes action(s) & passes them down to the componenet via props!
  //also... connect calls the dispatch when actions are called
//connect take 2 arguments
  //1.)what we want from state as props
  //2.)set of actions creators we want to dispatch from this componenet

const mapStateToProps = (state)=>{
  return state;
}

export default connect(mapStateToProps, {addOne: addOne, minusOne: minusOne, multFive: multFive, minusOneHundred: minusOneHundred, reset: reset})(Counter);
