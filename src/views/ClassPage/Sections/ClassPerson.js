import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import { MailOutline } from "@material-ui/icons";
// core components
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import styles from "assets/jss/material-kit-react/views/componentsSections/classActivityStyle.js";

import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(styles);

export default function ClassPerson() {
  const classes = useStyles();
  return (
    <>
      <GridContainer className={classes.cardPerson}>
        <GridItem xs={12} sm={12} md={2} className={classes.avatarPerson}>
          <img
            src={image}
            alt="..."
            className={classes.imgRoundedCircle + " " + classes.imgFluid}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <p className={classes.namePerson}>Đây là tên Người dùng.</p>
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <Button simple color="info" size="sm" className={classes.btnMail}>
            <MailOutline />
          </Button>
        </GridItem>
      </GridContainer>
    </>
  );
}
