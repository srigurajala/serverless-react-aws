import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavItem, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./containers/Home";
import Login from "./containers/Login";
import NotFound from "./containers/NotFound";
import NavBar from "./containers/NavBar";

import Routes from "./Routes";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App container">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
