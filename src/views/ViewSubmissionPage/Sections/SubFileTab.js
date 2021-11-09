import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
// @material-ui/icons

// core components
// import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/views/viewSubmissionSections/viewSubmissionStyle.js";

import SubFileElement from "./SubFileElement";
import Muted from "components/Typography/Muted";

const useStyles = makeStyles(styles);

export default function SubFileTab(props) {
  const classes = useStyles();
  const { submission, setViewFile } = props;
  return (
    <Grid container className={classes.subFileTab}>
      <Grid item xs={12} className={classes.subFileTabTitle}>
        <h4>File Attachments</h4>
        {submission ? (
          submission.submitted_date ? (
            <Muted>
              {new Date(submission.submitted_date).toLocaleString("en-US")}
            </Muted>
          ) : null
        ) : null}
      </Grid>
      <Grid item xs={12}>
        {submission ? (
          submission.materials.length > 0 ? (
            submission.materials.map((ele) => (
              <SubFileElement
                key={ele.id}
                name={ele.file_name}
                file={ele}
                setViewFile={setViewFile}
              />
            ))
          ) : (
            <Muted>No file attachment</Muted>
          )
        ) : null}
      </Grid>
    </Grid>
  );
}
