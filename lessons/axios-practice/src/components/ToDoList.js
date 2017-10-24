import React from "react";
import ToDoComponent from "./ToDoComponent";
import axios from "axios";

class ToDoList extends React.Component {
  constrctor() {
    super();
    this.state = {
      todo: [],
      newTodo: {
        title: "",
        description: ""
      }
    }
    //bind here
  }

  componentDidMount(){

  }

  postTodo(){

  }

  deleteTodo(id){

  }

  handleChange(event){

  }

  render(){
    //divs n shit
  }
}


export default ToDoList;
