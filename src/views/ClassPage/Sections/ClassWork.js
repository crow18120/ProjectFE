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

import styles from "assets/jss/material-kit-react/views/classSections/classActivityStyle.js";

import { baseURL } from "services/axios";

const useStyles = makeStyles(styles);

export default function ClassWork(props) {
  const classes = useStyles();
  const { id, created, deadline, description, tutor, title } = props;
  return (
    <Link to={`/classwork-page/${id}`}>
      <Card className={classes.card + " " + classes.cardClassWork}>
        <CardHeader
          color="primary"
          className={classes.cardHeader + " " + classes.cardHeaderClassWork}
        >
          <GridContainer className={classes.cardHeaderContainer}>
            <GridItem xs={2} sm={2} md={2} className={classes.avatar}>
              <img
                src={baseURL + tutor.profile_image}
                alt="..."
                className={classes.imgRoundedCircle + " " + classes.imgFluid}
              />
            </GridItem>
            <GridItem xs={10} sm={10} md={10}>
              <p className={classes.name}>
                {tutor.first_name} {tutor.last_name} added a new classwork:{" "}
                {title}
              </p>
              <p className={classes.timer}>
                {new Date(created).toLocaleString("en-US")}
              </p>
            </GridItem>
          </GridContainer>
        </CardHeader>
        {description == null ? null : (
          <CardBody className={classes.cardBody}>
            <p>{description}</p>
          </CardBody>
        )}
        <CardFooter
          className={classes.cardFooter + " " + classes.cardFooterClassWork}
        >
          {deadline == null ? (
            <p>Deadline: No due date</p>
          ) : new Date(deadline) < new Date() ? (
            <p className={classes.deadlineTimer}>
              Deadline:
              {new Date(deadline).toLocaleString("en-US")}
            </p>
          ) : (
            <p className={classes.deadlineTimerGreen}>
              Deadline:
              {new Date(deadline).toLocaleString("en-US")}
            </p>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
}
