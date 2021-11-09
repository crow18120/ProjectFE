import React from "react";
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import Close from "@material-ui/icons/Close";
// core components
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Danger from "components/Typography/Danger.js";

import styles from "assets/jss/material-kit-react/views/classWorkSections/classWorkStyle.js";
import Success from "components/Typography/Success";
import Warning from "components/Typography/Warning";

const useStyles = makeStyles(styles);

import { usePromiseResult } from "use-promise-result";
import { getAllSubmissionWithActivity } from "services/activityServices";

export default function ViewSubmission(props) {
  const classes = useStyles();
  const { activityID } = props;

  const { data, success } = usePromiseResult(() =>
    getAllSubmissionWithActivity(activityID)
  );
  console.log(data);
  return (
    <Card className={classes.card}>
      <CardHeader color="primary" className={classes.cardHeader}>
        <h4>Classwork Status</h4>
      </CardHeader>
      <CardBody className={classes.cardBody}>
        <GridContainer justify={"center"} className={classes.infoContainer}>
          <GridItem xs={4} className={classes.infoStatus}>
            {success ? (
              <h2>
                {
                  data.filter(
                    (ele) => ele.graded == -1 && ele.materials.length > 0
                  ).length
                }
              </h2>
            ) : (
              <h2>0</h2>
            )}
            <Warning>Hand in</Warning>
          </GridItem>
          <GridItem xs={4} className={classes.infoStatus}>
            {success ? (
              <h2>{data.filter((ele) => ele.materials.length == 0).length}</h2>
            ) : (
              <h2>0</h2>
            )}
            <Danger>Assigned</Danger>
          </GridItem>
          <GridItem xs={4} className={classes.infoStatus}>
            {success ? (
              <h2>{data.filter((ele) => ele.graded != -1).length}</h2>
            ) : (
              <h2>0</h2>
            )}
            <Success>Marked</Success>
          </GridItem>
        </GridContainer>
      </CardBody>
      <CardFooter className={classes.cardFooter}>
        <Link
          to={`/submission-page/${activityID}`}
          className={classes.linkView}
        >
          <Button color="rose" className={classes.btnSubmit}>
            View
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
