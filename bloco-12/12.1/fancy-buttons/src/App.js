import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super()
    this.state = {
      clickUm: 0,
      clickDois: 0,
      clickTres: 0
    }
  }
  
  render(){
    return (
    <div>
      <button onClick={() => this.setState((value, _props) => ({clickUm: value.clickUm + 1}))}>{this.state.clickUm}</button>
      <button onClick={() => this.setState((previousValue, _props) => ({clickDois: previousValue.clickDois + 1}))}>{this.state.clickDois}</button>
      <button onClick={() => this.setState((value, _props) => ({clickTres: value.clickTres +1}))}>{this.state.clickTres}</button>
    </div>
  )}
}

export default App;
