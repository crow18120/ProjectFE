import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Box, CircularProgress } from "@material-ui/core";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import UserTable from "components/Table/UserTable.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Notification from "components/MyNotifications/Notification";

import { usePromiseResult } from "use-promise-result";
import { getAllTutor, deleteTutor } from "services/tutorServices";
import { UserFormDialog } from "components/Dialog/MyCustomDialog";
import ConfirmDialog from "components/Dialog/MyConfirmDialog";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);

const formValues = {
  first_name: "",
  last_name: "",
  email: "",
  location: "",
  mobile: "",
  DOB: null,
};

export default function TutorList() {
  const classes = useStyles();

  const [classicModal, setClassicModal] = React.useState(false);
  const [index, setIndex] = React.useState(-1);
  const [myInitialValues, setMyInitialValues] = React.useState({
    ...formValues,
  });
  const [notify, setNotify] = React.useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [confirmDialog, setConfirmDialog] = React.useState({
    isOpen: false,
    title: "",
    subTitle: "",
    attachment: [],
  });

  const { data, success } = usePromiseResult(() => getAllTutor());

  const [myData, setMyData] = React.useState([]);

  const deleteItem = async (tutorID) => {
    const result = await deleteTutor(tutorID);
    if (result.status == 204) {
      const newData = await getAllTutor();
      setMyData(newData);
      setConfirmDialog({
        ...confirmDialog,
        isOpen: false,
      });
      setNotify({
        isOpen: true,
        message: "Delete tutor successfully.",
        type: "success",
      });
    } else if (result.status != 204) {
      setNotify({
        isOpen: true,
        message: "Something error...",
        type: "error",
      });
    }
  };

  React.useEffect(() => {
    index == -1
      ? setMyInitialValues({ ...formValues })
      : myData
      ? setMyInitialValues({ ...myData[index] })
      : setMyInitialValues({ ...formValues });
  }, [index, myData]);

  React.useEffect(() => {
    success ? setMyData(data) : null;
  }, [success]);

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Tutor Table</h4>
          </CardHeader>
          <CardBody>
            {success ? (
              <UserTable
                labelSearch="Search Tutor"
                tableHeaderColor="primary"
                tableHead={[
                  "ID",
                  "Name",
                  "Email",
                  "Date of birth",
                  "Location",
                  "Mobile",
                ]}
                tableData={myData.map((ele, index) => {
                  const date = ele.DOB
                    ? new Date(ele.DOB).toLocaleString("en-US")
                    : null;
                  return [
                    ++index,
                    ele.first_name + " " + ele.last_name,
                    ele.email,
                    date ? date.slice(0, date.indexOf(",")) : null,
                    ele.location,
                    ele.mobile,
                  ];
                })}
                idData={myData.map((ele) => ele.id)}
                setClassicModal={setClassicModal}
                setIndex={setIndex}
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
                fnDelete={deleteItem}
              />
            ) : (
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <CircularProgress />
              </Box>
            )}
          </CardBody>
        </Card>
      </GridItem>
      <UserFormDialog
        myInitialValues={myInitialValues}
        classicModal={classicModal}
        setClassicModal={setClassicModal}
        setNotify={setNotify}
        role={"Tutor"}
        index={index}
        setData={setMyData}
      />
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
      <Notification notify={notify} setNotify={setNotify} />
    </GridContainer>
  );
}
