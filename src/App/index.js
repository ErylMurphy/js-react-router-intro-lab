import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./style.css";
import Color from "../Color";
import Homepage from "../Homepage";


class App extends Component {
  render() {
    return (
        <Router>
      <div className = "App">
      <nav>
            <Homepage />
        </nav>
        </div>
        </Router>
    );
  }
}

export default App;
