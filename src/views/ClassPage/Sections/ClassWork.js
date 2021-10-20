import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
// import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import ClassMaterial from "views/ClassPage/Sections/ClassMaterial.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/classActivityStyle.js";

import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(styles);

export default function LoginPage() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader color="primary" className={classes.cardHeader}>
        <GridContainer className={classes.cardHeaderContainer}>
          <GridItem xs={12} sm={12} md={2} className={classes.avatar}>
            <img
              src={image}
              alt="..."
              className={classes.imgRoundedCircle + " " + classes.imgFluid}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={10}>
            <p className={classes.name}>Đây là tên Activity.</p>
            <p className={classes.timer}>Đây là thời gian.</p>
          </GridItem>
        </GridContainer>
      </CardHeader>
      <CardBody className={classes.cardBody}>
        <p>
          Đây là Thông báo nội dung của activity. Đây là Thông báo nội dung của
          activity. Đây là Thông báo nội dung của activity. Đây là Thông báo nội
          dung của activity.{" "}
        </p>
      </CardBody>
      <CardFooter className={classes.cardFooter}>
        <ClassMaterial />
      </CardFooter>
    </Card>
  );
}
