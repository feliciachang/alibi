import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Interactive from "./content/interactive";
import Static from "./content/static";
import InteractiveMedia from "./pages/interactivemedia";
import StaticPoetry from "./pages/staticpoetry";
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
          <Route path="/static/:id" exact component={Static} />
          <Route path="/writeandcode" exact component={Submit} />
          <Route path="/signupandin" exact component={SignUpIn} />
          <Route path="/memine" exact component={Profile} />
        </UserContext.Provider>
      </Router>
    </div>
  );
};

export default App;
