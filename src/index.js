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
import ViewPDF from "views/ViewDPF/ViewDPF";
import { PrivateRoute } from "components/PrivateRoute/PrivateRoute";
var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <PrivateRoute path="/landing-page" component={LandingPage} />
      <PrivateRoute path="/pro-page" component={ProfilePage} />
      <PrivateRoute path="/profile-page" component={MyProfilePage} />
      <Route path="/login-page" component={MyLoginPage} />
      <PrivateRoute path="/home-page" component={HomePage} />
      <PrivateRoute path="/class-page/:id" component={ClassPage} />
      <PrivateRoute path="/classwork-page/:id" component={ClassWorkPage} />
      <PrivateRoute path="/submission-page/:id" component={SubmissionPage} />
      <PrivateRoute
        path="/view-sub-page/:id/:stID"
        component={ViewSubmissionPage}
      />
      <PrivateRoute path="/view-pdf" component={ViewPDF} />
      <PrivateRoute path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
