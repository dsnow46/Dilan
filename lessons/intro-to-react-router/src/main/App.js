import React from "react";
import Navbar from "./Navbar";
import {Switch, Route} from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import ServicesContainer from "./views/services/Container";
import Contact from "./views/Contact";
import Footer from "./Footer";

class App extends React.Component {
  render(){
    return(
        <div className="app-wrapper">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/services" component={ServicesContainer}/>
            <Route exact path="/contact" component={Contact}/>
          </Switch>
          <Footer />
        </div>
    )
  }
}

export default App;
