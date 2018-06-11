import React, { Component } from 'react';
import './style.css';

class MutedColorsPage extends Component {
  render() {
    return (
      <div className="Muted-Colors-Page">
        <div className="color" style={{ backgroundColor: '#2e4045' }}>
          <div>Cody</div>
        </div>
        <div className="color" style={{ backgroundColor: '#c7bbc9' }}>
          Lila
          </div>
        <div className="color" style={{ backgroundColor: '#bfb5b2'
        }}>
          Shoe
          </div>
      </div>
    )
  }
}

export default MutedColorsPage;