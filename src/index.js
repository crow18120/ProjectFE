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
import ClassPage from "views/ClassPage/ClassPage";
import ClassWorkPage from "views/ClassWorkPage/ClassWorkPage";
import SubmissionPage from "views/SubmissionPage/SubmissionPage";
import ViewSubmissionPage from "views/ViewSubmissionPage/ViewSubmissionPage";
import ViewSubFile from "views/ViewSubmissionPage/Sections/ViewSubFile";
var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/pro-page" component={ProfilePage} />
      <Route path="/profile-page" component={MyProfilePage} />
      <Route path="/login-page" component={MyLoginPage} />
      <Route path="/home-page" component={HomePage} />
      <Route path="/class-page" component={ClassPage} />
      <Route path="/classwork-page" component={ClassWorkPage} />
      <Route path="/submission-page" component={SubmissionPage} />
      <Route path="/view-sub-page" component={ViewSubmissionPage} />
      <Route path="/view-sub-file" component={ViewSubFile} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
