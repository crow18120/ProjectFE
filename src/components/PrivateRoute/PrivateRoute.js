import React from "react";
import { Redirect, Route } from "react-router-dom";
import { decodeJwtToken } from "services/userServices";

export function PrivateRoute(props) {
  const decode = decodeJwtToken();

  return decode != null && decode.exp * 1000 > new Date() ? (
    <Route {...props}>{props.children}</Route>
  ) : (
    <Redirect to="/login-page" />
  );
}
