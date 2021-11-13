import React from "react";

import { useHistory } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components

import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";
import Button from "components/CustomButtons/Button";
import { logoutService } from "services/userServices";
const useStyles = makeStyles(styles);

export default function AdminNavbarLinks() {
  const classes = useStyles();

  const history = useHistory();
  const handleSignOut = async () => {
    await logoutService();
    history.push("/login-page");
  };

  return (
    <div className={classes.manager}>
      <Button
        onClick={handleSignOut}
        color={window.innerWidth > 959 ? "transparent" : "white"}
        className={classes.buttonLink}
      >
        Sign out
      </Button>
    </div>
  );
}
