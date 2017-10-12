import React from "react";
import ToDoComponent from "./ToDoComponent";
import axios from "axios";

class ToDoList extends React.Component {
  constructor(){
    super();
    this.state = {
      TodoList: []
    }
  }

  componentDidMount(){
    axios.get('https://api.vschool.io/nonnie/todo').then((response) => {
      this.setState({
        TodoList: response.data
      })
    })
  }

  render(){
    return this.state.TodoList.map((todo) => {
      return (
        <ToDoComponent
              description={todo.description}
              title={todo.title}
              />
        )
    })
  }
}
export default ToDoList;
