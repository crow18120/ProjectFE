/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { Notifications, Event } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

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
            "Action",
            "Another action",
            "Something else here",
            <Link to={"/profile-page"} className={classes.link}>
              Profile
            </Link>,
            { divider: true },
            "Change Password",
            { divider: true },
            <Link to={"/login-page"} className={classes.link}>
              Logout
            </Link>,
          ]}
        />
      </ListItem>
    </List>
  );
}
