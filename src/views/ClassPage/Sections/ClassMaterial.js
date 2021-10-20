import React from "react";
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import { Description } from "@material-ui/icons";
// core components
// import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/classActivityStyle.js";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

const useStyles = makeStyles(styles);

export default function ClassMaterial() {
  const classes = useStyles();
  console.log(classes);
  return (
    <GridContainer justify={"center"} className={classes.materialContainer}>
      <GridItem xs={12} sm={12} md={5} className={classes.materialItem}>
        <Link to="/">
          <GridContainer>
            <GridItem xs={2} sm={2} md={2} className={classes.iconFile}>
              <Description />
            </GridItem>
            <GridItem xs={9} sm={9} md={9} className={classes.infoFile}>
              <p className={classes.nameFile}>
                Đây là tên file. Đây là tên file. Đây là tên file.
              </p>
              <p className={classes.typeFile}>Đây là dạng file.</p>
            </GridItem>
          </GridContainer>
        </Link>
      </GridItem>
      <GridItem xs={12} sm={12} md={5} className={classes.materialItem}>
        <Link to="/">
          <GridContainer>
            <GridItem xs={2} sm={2} md={2} className={classes.iconFile}>
              <Description />
            </GridItem>
            <GridItem xs={9} sm={9} md={9} className={classes.infoFile}>
              <p className={classes.nameFile}>
                Đây là tên file. Đây là tên file. Đây là tên file.
              </p>
              <p className={classes.typeFile}>Đây là dạng file.</p>
            </GridItem>
          </GridContainer>
        </Link>
      </GridItem>
      <GridItem xs={12} sm={12} md={5} className={classes.materialItem}>
        <Link to="/">
          <GridContainer>
            <GridItem xs={2} sm={2} md={2} className={classes.iconFile}>
              <Description />
            </GridItem>
            <GridItem xs={9} sm={9} md={9} className={classes.infoFile}>
              <p className={classes.nameFile}>
                Đây là tên file. Đây là tên file. Đây là tên file.
              </p>
              <p className={classes.typeFile}>Đây là dạng file.</p>
            </GridItem>
          </GridContainer>
        </Link>
      </GridItem>
    </GridContainer>
  );
}
