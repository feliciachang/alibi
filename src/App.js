import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import home from './sketches/home';
import sketch from './sketches/sketch';
import newyork from './sketches/newyork';
import mist from './sketches/mist';
import editionone from './sketches/editionone';
import home_mobile from './sketches/home_mobile';
import editionone_mobile from './sketches/editionone_mobile';
import './App.css';

//<P5Wrapper sketch={sketch} color={this.state.color}></P5Wrapper>
//<P5Wrapper sketch={newyork} color={this.state.color}></P5Wrapper>

// <P5Wrapper sketch={sketch} color={this.state.color}></P5Wrapper>
// <P5Wrapper sketch={mist} color={this.state.color}></P5Wrapper>
// <P5Wrapper sketch={newyork} color={this.state.color}></P5Wrapper>
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {num: 0};
    this.onClick = this.handleClick.bind(this);
  }


  handleClick(){
    if(this.state.num == 2){
      this.setState({num: 0})
    }
    else {
      this.setState({num: this.state.num + 1})
    }
  }

  switcher = (num) => {
    switch(this.state.num) {
      case 0:
        return(
          <div onClick={this.onClick}>
            <P5Wrapper sketch={home} color={this.state.color}></P5Wrapper>
            <P5Wrapper sketch={editionone} color={this.state.color}></P5Wrapper>
          </div>
        );
      case 1:
        return(
          <div onClick={this.onClick}>
            <P5Wrapper sketch={mist} color={this.state.color}></P5Wrapper>
            <P5Wrapper sketch={editionone} color={this.state.color}></P5Wrapper>
          </div>
        );
      case 2:
        return(
          <div onClick={this.onClick}>
            <P5Wrapper sketch={newyork} color={this.state.color}></P5Wrapper>
            <P5Wrapper sketch={editionone} color={this.state.color}></P5Wrapper>
          </div>
        );
    }
  }

  render() {
      if(window.innerWidth < 500) {
        return (
          <div>
            <P5Wrapper sketch={home_mobile} color={this.state.color}></P5Wrapper>
            <P5Wrapper sketch={editionone_mobile} color={this.state.color}></P5Wrapper>
          </div>
        )
      }
      else {

        return this.switcher(this.state.num)
      }
  }
}


export default App;
