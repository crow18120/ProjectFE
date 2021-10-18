import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.10.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
// import LoginPage from "views/LoginPage/LoginPage.js";
import MyLoginPage from "views/Test/MyLoginPage.js";
import MyProfilePage from "views/Test/MyProfilePage.js";
import HomePage from "views/Test/HomePage.js";
import MyClassPage from "views/Test/MyClassPage";
var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/pro-page" component={ProfilePage} />
      <Route path="/profile-page" component={MyProfilePage} />
      <Route path="/login-page" component={MyLoginPage} />
      <Route path="/home-page" component={HomePage} />
      <Route path="/class-page" component={MyClassPage} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
