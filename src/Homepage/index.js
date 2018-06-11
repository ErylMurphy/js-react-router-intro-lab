import React, { Component } from 'react';
import './style.css';
import WarmColorsPage from "../WarmColorsPage";
import CoolColorsPage from "../CoolColorsPage";
import MutedColorsPage from "../MutedColorsPage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Homepage extends Component {
  render() {
    return (
      <div className = "Homepage">
      <Link to="/warm">Warm Colors</Link>
      <Link to="/cool">Cool Colors</Link>
      <Link to="/muted">Muted Colors</Link>

      <Route path="/warm" exact component={WarmColorsPage} />
      <Route path="/cool" exact component={CoolColorsPage} />
      <Route path="/muted" exact component={MutedColorsPage} />
      </div>
    )
  }
}

export default Homepage;