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

import { usePromiseResult } from "use-promise-result";
import { getActivity } from "services/activityServices";

const useStyles = makeStyles(styles);

export default function SubmissionStatus(props) {
  const classes = useStyles();

  const { submissionList, activityID } = props;

  const { data, success } = usePromiseResult(() => getActivity(activityID));

  let assigned = 0,
    marked = 0,
    handedIn = 0;
  submissionList.forEach((ele) => {
    ele.graded != -1
      ? marked++
      : ele.materials.length == 0
      ? assigned++
      : handedIn++;
  });
  return (
    <GridContainer className={classes.infoContainer}>
      <GridItem xs={12}>
        <div className={classes.infoSubmission}>
          <h2>{success ? data.name : "Classwork name..."}</h2>
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
