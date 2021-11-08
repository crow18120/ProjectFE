import React from "react";
//
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import styles from "assets/jss/material-kit-react/views/classSections/classActivityStyle.js";

const useStyles = makeStyles(styles);

export default function DeadlineWork() {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader
        color="primary"
        className={classes.cardHeader + " " + classes.cardHeaderDeadline}
      >
        <GridContainer className={classes.cardHeaderContainer}>
          <GridItem xs={12} sm={12} md={10}>
            <p className={classes.name}>Course</p>
          </GridItem>
        </GridContainer>
      </CardHeader>
      <CardBody className={classes.cardBody + " " + classes.cardBodyDeadline}>
        <p>
          This is description of Course. This is description of Course. This is
          description of Course. This is description of Course. This is
          description of Course. This is description of Course.
        </p>
      </CardBody>
      <CardFooter
        className={classes.cardFooter + " " + classes.cardFooterDeadline}
      >
        <Button simple color="primary" size="sm">
          <Link to="/class-page">View Detail</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
