/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link, useHistory } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { Notifications, Event } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";
import { logoutService } from "services/userServices.js";

import styles from "assets/jss/material-kit-react/components/myCustomHeaderLinksStyle.js";

const useStyles = makeStyles(styles);

export function MyCustomHeaderLeftLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem} color="transparent">
        <Link to={"/home-page"} className={classes.leftLink}>
          RBC University
        </Link>
      </ListItem>
    </List>
  );
}

export function MyCustomHeaderRightLinks(props) {
  const classes = useStyles();
  const history = useHistory();
  const [isSignIn, setIsSignIn] = React.useState(false);
  const handleSignOut = async () => {
    await logoutService();
    history.push("/login-page");
  };

  React.useEffect(() => {
    setIsSignIn(localStorage.getItem("access_token"));
  });

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button color="transparent" className={classes.navLink}>
          <Event className={classes.icons} />
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button color="transparent" className={classes.navLink}>
          <Notifications className={classes.icons} />
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          left
          hoverColor="info"
          buttonIcon="settings"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          dropdownList={[
            <Link to={"/profile-page"} className={classes.link}>
              Profile
            </Link>,
            "Change Password",
            { divider: true },
            isSignIn ? (
              <span
                style={{ display: "block" }}
                key="edit-info"
                onClick={() => handleSignOut()}
              >
                Sign out
              </span>
            ) : (
              <Link to={"/login-page"} className={classes.link}>
                Sign in
              </Link>
            ),
          ]}
        />
      </ListItem>
    </List>
  );
}
