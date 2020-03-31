import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

function Navbar() {
  return (
    <div>
      <div>
        <Router>
          <div className="leftnav">
            <a href="/" style={{paddingTop: "40px", fontSize: "40px"}}> Alibi </a>
            <div style={{paddingBottom: "40px"}}></div>
            <a href="/staticpoetry">Static Poetry</a>
            <hr style={{
                  display: "block",
                  border: 0,
                  borderTop: "1px solid #000",
                  padding: 0,
            }}/>          
            <a href="/interactivemedia">Interactive Media</a>
            <hr style={{
                  display: "block",
                  border: 0,
                  borderTop: "1px solid #000",
                  padding: 0,
            }}/>
            <a href="/random">Random</a>
            <hr style={{
                  display: "block",
                  border: 0,
                  borderTop: "1px solid #000",
                  padding: 0,
            }}/>
          </div>
        </Router>
        <div className="divided">
          <span className="divider" />
          <span className="divider" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
