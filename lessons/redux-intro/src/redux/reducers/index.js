const state = {
  counter: 0,
  contactList: [
    {
      firstName: "Dilan",
      lastName: "Snow",
      phone: "1234-435-6578"
    },
    {
      firstName: "Nonnie",
      lastName: "Martin",
      phone: "8010-0993-02002"
    },
    {
      firstName: "Jay-z",
      lastName: "Hova",
      phone: "671-929-0089"
    }
  ]
}

const reducer = function(prevState = state, action){
  switch(action.type){
    case "ADD_ONE":
      return{
        counter: prevState.counter + 1,
        contactList: prevState.contactList
      }
    case "MINUS_ONE":
      return{
        counter: prevState.counter - 1,
        contactList: prevState.contactList

      }
    case "MULT_FIVE":
    return{
      counter: prevState.counter + 5,
      contactList: prevState.contactList

    }
    case "MINUS_ONEHUNDRED":
    return{
      counter: prevState.counter - 100,
      contactList: prevState.contactList

    }
    case "RESET":
    return{
      counter: 0,
      contactList: prevState.contactList

    }
    case "REMOVE_FIRST_CONTACT":
    let newContactList = [...prevState.contactList];
    newContactList.shift();
    return{
      contactList: newContactList,
      counter: prevState.counter
    }
    default:
    return prevState
  }
}

export default reducer;
