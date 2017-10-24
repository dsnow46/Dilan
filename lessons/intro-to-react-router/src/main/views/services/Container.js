import React from "react";
import {Link} from "react-router-dom";
import ServicesComponent from "./Component";


class ServicesContainer extends React.Component{
  constructor(){
    super();
    this.state = {
      services: []
    }
    this.genLinks = this.genLinks.bind(this)
    this.searchById = this.searchById.bind(this)
  }
  componentDidMount(){
    this.setState({
      services:[
        {title: "mow lawn",
         price: 50,
         _id: "08743yshs266"},
         {title: "rake leaves",
          price: 200,
          _id: "08hvirue98"},
          {title: "yoga lesson",
           price: 500,
           _id: "9384u548d88"}
      ]
    })
  }

  searchById(id){
    return this.state.services.filter((service)=>{
      return id === service._id
    })[0]
  }

  genLinks(){
    return this.state.services.map((service) =>{
      return <Link
              key={service._id}
              to={`/services/${service._id}`}>{service.title}</Link>
    })
  }
  render(){
    return(
      <div>
      <ServicesComponent
        genLinks={this.genLinks}
        searchById={this.searchById}/>
      </div>
    )
  }
}

export default ServicesContainer;
