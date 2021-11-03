import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import { Description } from "@material-ui/icons";
// core components
// import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/viewSubmissionSections/viewSubmissionStyle.js";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

const useStyles = makeStyles(styles);

export default function SubFileElement(props) {
  const { name } = props;
  const classes = useStyles();
  return (
    <GridContainer className={classes.itemFile}>
      <GridItem xs={2} sm={2} md={2} className={classes.iconFile}>
        <Description />
      </GridItem>
      <GridItem xs={9} sm={9} md={9} className={classes.infoFile}>
        <p className={classes.nameFile}>{name}</p>
      </GridItem>
    </GridContainer>
  );
}
