import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
// import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import { ClassWorkFormDialog } from "components/Dialog/MyCustomDialog";

import styles from "assets/jss/material-kit-react/views/classSections/classActivityStyle.js";

const useStyles = makeStyles(styles);

const initialValues = {
  title: "",
  description: "",
  file: [],
  dueDate: null,
  isAssignment: false,
};

export default function AddClassWork() {
  const classes = useStyles();
  const [classicModal, setClassicModal] = React.useState(false);

  return (
    <>
      <Card
        className={
          classes.card + " " + classes.cardAdd + " " + classes.cardAddWork
        }
        onClick={() => {
          setClassicModal(true);
        }}
      >
        <CardHeader color="primary" className={classes.cardHeader}>
          <GridContainer className={classes.cardHeaderContainer}>
            <GridItem>
              <p className={classes.name}>Create a new classwork</p>
            </GridItem>
          </GridContainer>
        </CardHeader>
      </Card>
      <ClassWorkFormDialog
        classicModal={classicModal}
        setClassicModal={setClassicModal}
        myInitialValues={initialValues}
      />
    </>
  );
}
