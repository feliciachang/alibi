import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Interactive from './content/interactive';
import Static from "./content/static";
import InteractiveMedia from "./pages/interactivemedia";
import StaticPoetry from "./pages/staticpoetry";
import Contribute from "./pages/contribute";
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
        <Route path="/contribute" exact component={Contribute}/>
        <Route path="/interactive/:id" exact component={Interactive} />
        <Route path="/static/:id" exact component={Static} />
      </Router>
      </div>
    )
  }
}

export default App;
