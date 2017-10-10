//state uses class not function
//**class App extends React.component
//setState method has to be used to change the state comes from react.component
//make a constructor function ** needs Super();
//Super(); needs React.component,
//State will always be an object
//--------------------------------------------------------------------------------------------------
//
//  class App extends React.component { ** this is the head of everything
//    constructor() {
//      super()
//      this.state ={
//      **state of shit goes here
//    }
//    *** come down here and bind all that shit(syntax = (this.someshit = this.someshit.bind(this)
//  }
//
//  *********NOW THIS IS WHERE YOU USE  this.setState & prevState*****************
//      somefunc() {
//        this.setState(prevState)
//    }
//
//
//
//
//****** at the bottom use a render() {
//                  return(
//                    buttons to add and subtract go here
//                )
//
//            }
//

import React from "react";
import Numbers from "./Numbers";

class App extends React.Component {

  constructor() {
      super();
      this.state = {
        value: 0
    }
      this.addition = this.addition.bind(this);
      this.subtraction = this.subtraction.bind(this);
    }
  addition(){
    this.setState(prevState => {
      return {
        value: prevState.value + 1
      }
    })
  }
  subtraction(){
    this.setState(prevState => {
      return {
        value: prevState.value - 1
      }
    })
  }
  render() {
    return(
    <Numbers value={this.state.value}
             addition={this.addition}
             subtraction={this.subtraction}/>
    )
  }
}
export default App;
