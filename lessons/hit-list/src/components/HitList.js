import React from "react";
import HitListComponent from "./HitListComponent";
import axios from "axios";

class HitList extends React.Component{
  constructor(){
    super();
    this.state = {
      HitList: []
    }
  }

  componentDidMount(){
    axios.get('http://api.vschool.io:6543/hitlist.json').then((response) => {
      this.setState({
        HitList: response.data
      })
    })
  }

  render(){
      return this.state.HitList.map((hit) => {
        return(
            <HitListComponent name={hit.name}
                              image={hit.image}/>
          )
      })
    }
}


export default HitList;
