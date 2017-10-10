import React from "react";
import NameComponent from "./NameComponent";
import NameList from "./NameList";
import "./Names.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      originalName: "",
      NameList: []
    }
    this.nameClick = this.nameClick.bind(this)
    this.nameChange = this.nameChange.bind(this)
  }

  nameClick() {
    this.setState((prevState) => {
      return {
        NameList: [...prevState.NameList, prevState.originalName],
        originalName: ""
      }
    })
  }

  nameChange(event) {
    this.setState({
      originalName: event.target.value
    });
  }

  render(){
    return(
      <div>
        <NameComponent label={this.state.originalName}
                       handleClick={this.nameClick}
                       handleChange={this.nameChange}/>
        <NameList names={this.state.NameList}/>
      </div>
    )
  }
}

export default App;
