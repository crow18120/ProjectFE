import React from "react";
// nodejs library that concatenates classes

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// react-router-dom
import { Link } from "react-router-dom";
// @material-ui/icons

// core components
// import Footer from "components/Footer/Footer.js";
// import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/submissionPage.js";

import { usePromiseResult } from "use-promise-result";
import { getActivity } from "services/activityServices";

const useStyles = makeStyles(styles);

export default function SubmissionLink(props) {
  const classes = useStyles();

  const { activityID } = props;

  const { data, success } = usePromiseResult(() => getActivity(activityID));

  return (
    <GridContainer>
      <GridItem>
        <div className={classes.brand}>
          {success ? (
            <Link to={`/class-page/${data.class_obj}`}>
              <h1 className={classes.title}>
                {data.class_detail.name} •{" "}
                {data.class_detail.course_detail.name}
              </h1>
            </Link>
          ) : (
            <h1 className={classes.title}>Class • Course ....</h1>
          )}
        </div>
      </GridItem>
    </GridContainer>
  );
}
