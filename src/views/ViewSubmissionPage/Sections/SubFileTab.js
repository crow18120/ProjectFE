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

export default function SubFileTab() {
  const classes = useStyles();
  return (
    <Grid container className={classes.subFileTab}>
      <Grid item xs={12} className={classes.subFileTabTitle}>
        <h4>Files Attachment</h4>
        <Muted>Đây là ngày nộp.</Muted>
      </Grid>
      <Grid item xs={12}>
        <SubFileElement />
        <SubFileElement />
        <SubFileElement />
      </Grid>
    </Grid>
  );
}
