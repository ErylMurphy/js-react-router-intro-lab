import React, { Component } from 'react';
import './style.css';

class CoolColorsPage extends Component {
  render() {
    return (
      <div className="Cool-Colors-Page">
        <div className="color" style={{ backgroundColor: '#00738c' }}>
          <div>Sea</div>
        </div>
        <div className="color" style={{ backgroundColor: '#d6ead4' }}>
          Bone
          </div>
        <div className="color" style={{ backgroundColor: '#97a675' }}>
          Sage
          </div>
      </div>
    )
  }
}
export default CoolColorsPage;