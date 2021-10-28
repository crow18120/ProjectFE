import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
// @material-ui/icons
import { Description, Close } from "@material-ui/icons";
// core components
// import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/materialStyle.js";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

const useStyles = makeStyles(styles);

export default function SubmissionMaterial(props) {
  const { name, type, id, handleDeleteFile } = props;
  const classes = useStyles();

  const handleOnClick = () => {
    handleDeleteFile(id);
  };

  return (
    <GridContainer className={classes.itemFile}>
      <GridItem xs={2} sm={2} md={2} className={classes.iconFile}>
        <Description />
      </GridItem>
      <GridItem xs={8} sm={8} md={8} className={classes.infoFile}>
        <p className={classes.nameFile}>{name}</p>
        <p className={classes.typeFile}>{type}</p>
      </GridItem>
      <GridItem xs={2} sm={2} md={2} className={classes.btnFile}>
        <IconButton
          className={classes.MuiIconButtonRoot}
          onClick={handleOnClick}
        >
          <Close />
        </IconButton>
      </GridItem>
    </GridContainer>
  );
}
