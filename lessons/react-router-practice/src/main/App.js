import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {Switch, Route} from "react-router-dom";


class App extends React.Component {
  render(){
    return(
      <div className="app-wrapper">
        <Navbar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/services" component={Services}/>
            <Route exact path="/contact" component={Contact}/>
          </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
