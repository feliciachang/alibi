import React, { useState, useMemo, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
  Redirect,
} from "react-router-dom";

import Interactive from "./content/interactive";
import Archive from "./content/archive";
import Static from "./content/static";
import About from "./pages/about";
import Navbar from "./navigation/navbar";
import Home from "./pages/home";
import Submit from "./pages/submit";
import SignUpIn from "./pages/signupin";
import Profile from "./pages/profile";
import Invitation from "./pages/invitation/invitation";

import { UserContext, InviteContext } from "./UserContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { invite, setInvite } = useContext(InviteContext);
  console.log("privateRoute", invite);
  return (
    <Route
      {...rest}
      render={(props) =>
        invite === "true" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/invitation" />
        )
      }
    />
  );
};

const Container = withRouter(({ location }) => {
  const [user, setUser] = useState({ id: 0 });
  const [invite, setInvite] = useState(localStorage.getItem("code") || false);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  const inv = useMemo(() => ({ invite, setInvite }), [invite, setInvite]);

  console.log("app state", invite);
  return (
    <div>
      <InviteContext.Provider value={inv}>
        <UserContext.Provider value={value}>
          {location.pathname != "/invitation" && <Navbar />}
          <Switch>
            <PrivateRoute path="/" exact component={Home} />
            <PrivateRoute path="/about" exact component={About} />
            <PrivateRoute
              path="/interactive/:id"
              exact
              component={Interactive}
            />
            <PrivateRoute path="/archive/:id" exact component={Archive} />
            <PrivateRoute path="/static/:id" exact component={Static} />
            <PrivateRoute path="/write-code" exact component={Submit} />
            <PrivateRoute path="/signup-in" exact component={SignUpIn} />
            <PrivateRoute path="/me-mine/:id" exact component={Profile} />
            <Route path="/invitation" exact component={Invitation} />
          </Switch>
        </UserContext.Provider>
      </InviteContext.Provider>
    </div>
  );
});

const App = () => {
  return (
    <Router>
      <Container />
    </Router>
  );
};

export default App;
