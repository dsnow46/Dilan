import React from "react";
import axios from "axios";
import RandomColorsComponent from "./RandomColorsComponent";

class RandomColors extends React.Component{
  constructor(){
    super();
    this.state = {
      randomColors: []
    }
  }

  componentDidMount(){
    axios.get('http://www.colr.org/json/color/ffba13').then((response) => {
      console.log(response.data)
      this.setState ({
        randomColors: []
      })
    })
  }

  render(){
    return this.state.randomColors.map((color) => {
      return(
            <RandomColorsComponent name={color.name}/>
      )
    })
  }
}


export default RandomColors;
