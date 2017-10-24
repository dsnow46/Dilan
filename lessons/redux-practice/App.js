const redux = require("redux");

const state = {
  counter: 0,
  contactList: []
}

function custom(num){
  return{
    type: "CUSTOM",
    num
  }
}

function removeName(){
  return{
    type: "REMOVE_NAME"
  }
}

function reset(){
  return {
    type: "RESET"
  }
}

function addName(name){
  return{
    type: "ADD_NAME",
    name
  }
}

function reducer(prevState = state, action){
  switch(action.type){
    case "RESET":
      return{
        counter: 0,
        contactList: prevState.contactList
      }
    case "CUSTOM":
      return{
        counter: prevState.counter + action.num,
        contactList: prevState.contactList
      }
    case "ADD_NAME":
      return{
        contactList: [...prevState.contactList, action.name],
        counter: prevState.counter
      }
    case "REMOVE_NAME":
    let newLsit = [...prevState.contactList];
    newLsit.shift();
      return{
        contactList: newLsit,
        counter: prevState.counter
      }
      default:
        return prevState;
  }
}

const store = redux.createStore(reducer);
store.subscribe(()=>{
  console.log(store.getState())
});



store.dispatch(addName("john"));
store.dispatch(addName("joseph"));
store.dispatch(addName("jingle"));
store.dispatch(addName("himer"));
store.dispatch(addName("schmidt"));
store.dispatch(removeName());
