import React, { Component } from "react";
import "./style.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Color Collector</h1>
        <div class="colors-container">
          <div className="color" style={{backgroundColor: '#E5D352'}}>
            <div>Sandstorm</div>
          </div>
          <div className="color" style={{backgroundColor: '#7AE7C7'}}>
            Peal Aqua
          </div>
          <div className="color" style={{backgroundColor: '#DB5461'}}>
            Dark Terra Cotta
          </div>
        </div>
      </div>
    );
  }
}

export default App;
