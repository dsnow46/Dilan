import React from "react";

function ToDoComponent(props){
  return (
    <div>
      <h1>{props.todo.title}</h1>
      <h2>{props.todo.description}</h2>
      <button onClick={() => props.deleteTodo(props.todo._id)}>Delete</button>
      <input
            type="text"
            placeholder="Title"
            name={props.title}/>
      <button onClick={() => props.postInput(props.todo.title)}>Add</button>

    </div>
  )
}

export default ToDoComponent;


// <input type="text"
//        placeholder="title"
//        name={props.title}
//        value={this.state.new.title}
//        onChange={this.handleChange}/>
