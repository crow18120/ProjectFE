import React from "react";
// React-router-dom
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
// import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Danger from "components/Typography/Danger.js";
import Success from "components/Typography/Success";
import Warning from "components/Typography/Warning";

import styles from "assets/jss/material-kit-react/views/submissionSections/submissionStyle.js";

import { baseURL } from "services/axios";

const useStyles = makeStyles(styles);

export default function SubmissionDetail(props) {
  const { filter, file, student, activityID } = props;

  const classes = useStyles();

  return (
    <Link to={`/view-sub-page/${activityID}/${student.id}`}>
      <Card className={classes.card}>
        <CardHeader color="primary" className={classes.cardHeader}>
          <GridContainer
            className={classes.infoContainer + " " + classes.detailSubmission}
          >
            <GridItem className={classes.infoPerson}>
              <img
                src={baseURL + student.profile_image}
                alt="..."
                className={
                  classes.imgRoundedCircle +
                  " " +
                  classes.imgFluid +
                  " " +
                  classes.avatar
                }
              />
            </GridItem>
            <GridItem className={classes.infoPerson}>
              <p className={classes.namePersonStyle}>
                {student.first_name} {student.last_name}
              </p>
            </GridItem>
          </GridContainer>
        </CardHeader>
        <CardBody className={classes.cardBody}>
          <GridContainer>
            <GridItem className={classes.statusSubmission}>
              {file == "0" ? (
                <p className={classes.namePerson}>No file attachment</p>
              ) : file == "1" ? (
                <p className={classes.namePerson}>{file} file attachment</p>
              ) : (
                <p className={classes.namePerson}>{file} files attachment</p>
              )}
            </GridItem>
          </GridContainer>
        </CardBody>
        <CardFooter className={classes.cardFooter}>
          {filter === "Assigned" ? (
            <Danger className={classes.statusSubmission}>Missing</Danger>
          ) : filter === "Marked" ? (
            <Success className={classes.statusSubmission}>Marked</Success>
          ) : (
            <Warning className={classes.statusSubmission}>Hand in</Warning>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
}
