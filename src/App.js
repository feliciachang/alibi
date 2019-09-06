import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import home from './sketches/home';
import sketch from './sketches/sketch';
import newyork from './sketches/newyork';
import './App.css';

//<P5Wrapper sketch={sketch} color={this.state.color}></P5Wrapper>
//<P5Wrapper sketch={newyork} color={this.state.color}></P5Wrapper>
class App extends Component {
  constructor(){
    super();
    this.state = {color:[Math.random()*255, Math.random()*255, Math.random()*255]};
    this.randomColor = this.randomColor.bind(this);
  }

  randomColor(){
    this.setState({color:[Math.random()*255, Math.random()*255, Math.random()*255]}
    )
  }

  render() {
    return (
      <div>
      <link href="https://fonts.googleapis.com/css?family=Vollkorn&display=swap" rel="stylesheet"/>
      <P5Wrapper sketch={home} color={this.state.color}></P5Wrapper>
      </div>
    );
  }
}


export default App;
