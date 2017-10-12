import React from "react";
import Monkey from "./Monkey"

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      monkey: ""
    }
    this.monkeyClick = this.monkeyClick.bind(this)
    this.monkeyChange = this.monkeyChange.bind(this)
  }
  monkeyClick(){
    this.setState(prevState => {
      return {
        [...prevState.monkey]
      }
    })
  }

  monkeyChange(event){
    this.setState({
      monkey: event.target.value
    })
  }

  render(){
    return (
      <div>
        <Monkey label={this.state.monkey}
                handleClick={this.monkeyClick}
                handleChange={this.monkeyChange}/>
      </div>
    )
  }
}

export default App;
