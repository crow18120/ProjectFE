import React from "react";
//
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
// import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import styles from "assets/jss/material-kit-react/views/componentsSections/classActivityStyle.js";

import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(styles);

export default function ClassWork() {
  const classes = useStyles();
  return (
    <Link to="/">
      <Card className={classes.card + " " + classes.cardClassWork}>
        <CardHeader
          color="primary"
          className={classes.cardHeader + " " + classes.cardHeaderClassWork}
        >
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
        <CardBody
          className={classes.cardBody + " " + classes.cardBodyClassWork}
        >
          <p>
            Đây là Thông báo nội dung của activity. Đây là Thông báo nội dung
            của activity. Đây là Thông báo nội dung của activity. Đây là Thông
            báo nội dung của activity.{" "}
          </p>
        </CardBody>
        <CardFooter className={classes.cardFooter}>
          <p className={classes.deadlineTimer}>
            Deadline: Đây là thời hạn nộp bài.
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
}
