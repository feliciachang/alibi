import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Interactive from './content/interactive';
import Static from "./content/static";
import InteractiveMedia from "./pages/interactivemedia";
import StaticPoetry from "./pages/staticpoetry";
import About from "./pages/about";
import Navbar from "./navigation/navbar";
import Home from "./pages/home";

class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/interactivemedia" exact component={InteractiveMedia} />
        <Route path="/staticpoetry" exact component={StaticPoetry} />
        <Route path="/about" exact component={About}/>
        <Route path="/interactive/:id" exact component={Interactive} />
        <Route path="/static/:id" exact component={Static} />
      </Router>
      </div>
    )
  }
}

export default App;
