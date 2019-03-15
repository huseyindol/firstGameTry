import React, { Component } from 'react';

import './Fruit.scss';

import { connect } from "react-redux";
import { onGameFruit } from './actions/gameActions';


class Fruit extends Component {

  state = {
    fruitCount: 0
  }

  componentWillMount() {
    var fruitCount = Math.floor(Math.random() * 10) +1;

    this.setState({
      fruitCount
    })

    this.props.onGameFruit(fruitCount)
  }

  randomFruit = () => {
    var fruittag = [];
    for (let i = 0; i < this.state.fruitCount; i++) {
      fruittag.push(<i className="fruit" key={i}></i>)
    }
    return fruittag
  }

  render() {
    return (
      <div className="fruitbox">
        {this.randomFruit()}
      </div>
    )
  }
}


const mapStatoToProps = (state, props) => {
  return {
    gameReducers: state.gameReducers
  }
}

const mapDispatchToProps = {
  onGameFruit
}

export default connect(mapStatoToProps, mapDispatchToProps)(Fruit);