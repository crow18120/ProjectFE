import React from "react";
// import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import Close from "@material-ui/icons/Close";
// core components
// import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Danger from "components/Typography/Danger.js";
import Success from "components/Typography/Success";
import Warning from "components/Typography/Warning";

import styles from "assets/jss/material-kit-react/views/submissionSections/submissionStyle.js";

const useStyles = makeStyles(styles);

const initialValues = {
  title: "Đây là tên classwork",
};

export default function SubmissionStatus(props) {
  const classes = useStyles();

  const { submissionList } = props;

  let assigned = 0,
    marked = 0,
    handedIn = 0;
  submissionList.forEach((element) => {
    !element["isSubmitted"]
      ? (assigned += 1)
      : element["isMarked"]
      ? (marked += 1)
      : (handedIn += 1);
  });
  return (
    <GridContainer className={classes.infoContainer}>
      <GridItem xs={12}>
        <div className={classes.infoSubmission}>
          <h2>{initialValues.title}</h2>
        </div>
      </GridItem>
      <GridItem xs={4} className={classes.infoStatus}>
        <h2>{handedIn}</h2>
        <Warning>Hand in</Warning>
      </GridItem>
      <GridItem xs={4} className={classes.infoStatus}>
        <h2>{assigned}</h2>
        <Danger>Assigned</Danger>
      </GridItem>
      <GridItem xs={4} className={classes.infoStatus}>
        <h2>{marked}</h2>
        <Success>Marked</Success>
      </GridItem>
    </GridContainer>
  );
}
