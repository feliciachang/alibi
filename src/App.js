import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Interactive from "./content/interactive";
import Archive from "./content/archive";
import Static from "./content/static";
import About from "./pages/about";
import Navbar from "./navigation/navbar";
import Home from "./pages/home";
import Submit from "./pages/submit";
import SignUpIn from "./pages/signupin";
import Profile from "./pages/profile";

import { UserContext } from "./UserContext";

const App = () => {
  const [user, setUser] = useState({ id: 0 });

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  console.log("app state", value);
  return (
    <div>
      <Router>
        <UserContext.Provider value={value}>
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/interactive/:id" exact component={Interactive} />
          <Route path="/archive/:id" exact component={Archive} />
          <Route path="/static/:id" exact component={Static} />
          <Route path="/write-code" exact component={Submit} />
          <Route path="/signup-in" exact component={SignUpIn} />
          <Route path="/me-mine/:id" exact component={Profile} />
        </UserContext.Provider>
      </Router>
    </div>
  );
};

export default App;
