import React from "react";

function Header (){
  return (
      <div>
      <p className="paragraph">Hello! Would you like to shop for
        <a href="bigcats.com"> big cats</a>
      </p>
      </div>
  )
}

function Title(){
  return <h1>Great Title!</h1>
}

function App () {
  return (
    <div>
      <Header />
      <Title />
    </div>
  )
}

export default App;
