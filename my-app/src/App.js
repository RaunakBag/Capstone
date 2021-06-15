import React, {Component } from "react";
import CityList from './CityList'
import Header from "./Header";
import page from "./City/page";
import {BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component{
  render() {
    return (
      <div>
      
      
            <Router>
        
    <Route path = "/" component = {CityList} exact></Route>
    <Route path = "/page" component ={page} exact></Route>
    </Router>
    </div>
    )
  }
}

export default App;