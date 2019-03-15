import React, { Component } from 'react';
import './App.scss';

import Cloud from './Cloud';
import Rain from './Rain';
import Sun from './Sun';
import Fruit from './Fruit';

import { connect } from "react-redux";
import { onGameStart, onGameCloud, onGameRain, onGameStandartDay, onGameSun, onGameFinish, onGameEnd, onGameRestart } from './actions/gameActions';

class App extends Component {

  state = {
    fruit: false
  }

  onStart = (e) => {
    this.setState({
      fruit: false
    })
    this.props.onGameStart()
    setTimeout(() => {
      this.onCloud()
    }, 1000)
  }

  onCloud = () => {
    this.props.onGameCloud()
    setTimeout(() => {
      this.onRain()
    }, 2000)
  }

  onRain = () => {
    this.props.onGameRain()
    setTimeout(() => {
      this.onStandartDay()
    }, 6000)
  }

  onStandartDay = () => {
    this.props.onGameStandartDay()
    setTimeout(() => {
      this.onSun()
    }, 1000)
  }

  onSun = () => {
    this.props.onGameSun()
    setTimeout(() => {
      this.onTreeFruit()
    }, 3000)
  }

  onTreeFruit = () => {
    this.setState({
      fruit: true
    })
    setTimeout(() => {
      this.onFinish()
    }, 3000)
  }

  onFinish = () => {
    this.props.onGameFinish()
    if (this.props.gameReducers.limit > 1 && this.props.gameReducers.start === false) {
      this.props.onGameEnd()
    }
  }

  onRestart = () => {
    this.props.onGameRestart()
    this.onStart()
  }

  render() {
    const weathercss = (this.props.gameReducers.cloud === false) ?
      'body{background:#00b4ff;}' :
      'body{background:#0377a7;}'
    const cloudtag = (this.props.gameReducers.cloud === false) ?
      '' :
      (<Cloud />)
    const raintag = (this.props.gameReducers.rain === false) ?
      '' :
      (<Rain />)
    const suntag = (this.props.gameReducers.sun === false) ?
      '' :
      (<Sun />)
    const fruittag = (this.state.fruit === false) ?
      '' :
      (<Fruit />)
    return (
      <div className="App">
        <style>
          {weathercss}
        </style>
        {
          (this.props.gameReducers.limit <= 1 && this.props.gameReducers.start === false) ?
            (<div className="startbox"><button onClick={this.onStart} className="startbtn">Başla</button></div>) :
            ''
        }
        {
          (this.state.fruit === false) ?
            (<div className="score">Skor: 0</div>) :
            (<div className="score">Skor: {this.props.gameReducers.fruitCount}</div>)
        }
        {
          (this.props.gameReducers.endgame === true) ?
            (
              <div className="startbox">
                <div className="gamescore">Skor: {this.props.gameReducers.fruit}</div>
                <button onClick={this.onRestart} className="restartbtn">Yeniden Başla</button>
              </div>
            ) :
            ''
        }

        {raintag}
        {cloudtag}
        {suntag}

        <div className="ground">
          <div className="tree">
            {fruittag}
            <div className="tree_branch tree_branch2"></div>
            <div className="tree_branch"></div>
            <div className="tree_root"></div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStatoToProps = (state, props) => {
  return {
    gameReducers: state.gameReducers
  }
}

const mapDispatchToProps = {
  onGameStart,
  onGameFinish,
  onGameCloud,
  onGameRain,
  onGameStandartDay,
  onGameSun,
  onGameEnd,
  onGameRestart
}

export default connect(mapStatoToProps, mapDispatchToProps)(App);