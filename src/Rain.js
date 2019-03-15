import React, { Component } from 'react';
import './Rain.scss';

class Rain extends Component {

  rainbow = () => {
    var rainbow = [];
    for (let i = 0; i <= 150; i++) {
      rainbow.push(<i className="rain" key={i}></i>);
    }
    return rainbow;
  }

  render() {
    return (
      <div className="rainbow">
        {this.rainbow()}
      </div>
    )
  }
}

export default Rain;