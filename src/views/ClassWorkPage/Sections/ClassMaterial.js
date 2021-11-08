import React from "react";
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import { Description } from "@material-ui/icons";
// core components
// import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/classWorkSections/classWorkStyle.js";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import { baseURL } from "services/axios";
import ViewPDF from "views/ViewDPF/ViewDPF";
import { Dialog } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function ClassMaterial(props) {
  const { name, type, linkMaterial } = props;
  const classes = useStyles();
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClick = (event) => {
    event.preventDefault();
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Link to={""} onClick={handleClick}>
        <GridContainer className={classes.itemFile}>
          <GridItem xs={2} sm={2} md={2} className={classes.iconFile}>
            <Description />
          </GridItem>
          <GridItem xs={9} sm={9} md={9} className={classes.infoFile}>
            <p className={classes.nameFile}>{name}</p>
            <p className={classes.typeFile}>{type}</p>
          </GridItem>
        </GridContainer>
      </Link>
      <Dialog open={isOpen} classes={{ paperScrollPaper: classes.abc }}>
        <ViewPDF
          isViewSubFile={false}
          file={baseURL + linkMaterial}
          file_name={name}
          handleClose={handleClose}
        />
      </Dialog>
    </>
  );
}
