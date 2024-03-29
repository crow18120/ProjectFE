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
import Notification from "components/MyNotifications/Notification";

import { ClassActivityFormDialog } from "components/Dialog/MyCustomDialog";

import styles from "assets/jss/material-kit-react/views/classSections/classActivityStyle.js";

import { baseURL } from "services/axios";

const useStyles = makeStyles(styles);

const initialValues = { title: "", description: "", file: [] };

export default function AddClassActivity(props) {
  const classes = useStyles();
  const [classicModal, setClassicModal] = React.useState(false);
  const [notify, setNotify] = React.useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const { tutor, classID } = props;

  return (
    <>
      <Card
        className={classes.card + " " + classes.cardAdd}
        onClick={() => {
          setClassicModal(true);
        }}
      >
        <CardHeader color="primary" className={classes.cardHeader}>
          <GridContainer className={classes.cardHeaderContainer}>
            <GridItem xs={2} sm={2} md={2} className={classes.avatar}>
              <img
                src={baseURL + tutor.profile_image}
                alt="..."
                className={classes.imgRoundedCircle + " " + classes.imgFluid}
              />
            </GridItem>
            <GridItem xs={10} sm={10} md={10}>
              <p className={classes.name}>
                Post a new activity for your class.
              </p>
            </GridItem>
          </GridContainer>
        </CardHeader>
      </Card>
      <ClassActivityFormDialog
        classicModal={classicModal}
        setClassicModal={setClassicModal}
        myInitialValues={initialValues}
        classOrActivityID={classID}
        setNotify={setNotify}
        isEdit={false}
      />
      <Notification notify={notify} setNotify={setNotify} />
    </>
  );
}
