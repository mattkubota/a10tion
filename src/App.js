import React, { Component } from 'react';
import './App.css';
import bgvideo from './assets/comp2.mp4';

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentTime: 600,
      timerHidden: true,
    }
  }
  getCurrentTime() {
    return this.currentTime;
  }
  startCountDown() {
    document.getElementById('my-video').remove();
    this.setState({ timerHidden: false})
    setInterval(() => {
      if (this.state.currentTime > 0) {
        this.setState({ currentTime: this.state.currentTime - 1})
      } else {
        clearInterval()
      }
    }, 1000)

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div className="timer" hidden={this.state.timerHidden}>{this.state.currentTime}</div>
        <video id="my-video" className='videoTag' autoPlay loop muted onClick={() => this.startCountDown()}>
          <source src={bgvideo} type='video/mp4' />
        </video>
        </header>
      </div>
    );
  }
}

export default App;
