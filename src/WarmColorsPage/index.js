import React, { Component } from 'react';
import './style.css';

class WarmColorsPage extends Component {
  render() {
    return (
      <div className="Warm-Colors-Page">
        <div className="color" style={{ backgroundColor: '#91000d' }}>
          <div>Blood</div>
        </div>
        <div className="color" style={{ backgroundColor: '#f0bcaf' }}>
          Blush
          </div>
        <div className="color" style={{ backgroundColor: '#343a12' }}>
          Olive
          </div>
      </div>
    )
  }
}

export default WarmColorsPage;