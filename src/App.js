import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import newyork from './sketches/newyork';
import Interactive from './content/interactive';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import './App.css';
import Navbar from "./navbar";
import Home from "./pages/home";

class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/interactive/:id" exact component={Interactive} />
      </Router>
      </div>
    )
  }
}

export default App;
