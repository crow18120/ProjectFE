import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Box, CircularProgress } from "@material-ui/core";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CourseTable from "components/Table/CourseTable.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Notification from "components/MyNotifications/Notification";
import ViewFileDialog from "components/Dialog/ViewFileDialog";

import { usePromiseResult } from "use-promise-result";
import { getAllCourse, deleteCourse } from "services/courseServices";
import { CourseFormDialog } from "components/Dialog/MyCustomDialog";
import ConfirmDialog from "components/Dialog/MyConfirmDialog";
import { getAllClass } from "services/classServices";

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
  name: "",
  description: "",
  credits: "",
  file: [],
  materials: [],
};

export default function ClassList() {
  const classes = useStyles();

  const [classicModal, setClassicModal] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
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

  const { data, success } = usePromiseResult(() => getAllClass());

  const [myData, setMyData] = React.useState([]);

  const deleteItem = async (courseID) => {
    const result = await deleteCourse(courseID);
    if (result.status == 204) {
      const newData = await getAllCourse();
      setMyData(newData);
      setConfirmDialog({
        ...confirmDialog,
        isOpen: false,
      });
      setNotify({
        isOpen: true,
        message: "Delete course successfully.",
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
      ? setMyInitialValues({ ...myData[index], file: myData[index].materials })
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
            <h4 className={classes.cardTitleWhite}>Course Table</h4>
          </CardHeader>
          <CardBody>
            {success ? (
              <CourseTable
                labelSearch="Search Class"
                tableHeaderColor="primary"
                tableHead={["ID", "Name", "Course", "Tutor"]}
                tableData={myData.map((ele, index) => {
                  return [
                    ++index,
                    ele.name,
                    ele.course_detail.name,
                    ele.tutor_detail.first_name +
                      " " +
                      ele.tutor_detail.last_name,
                  ];
                })}
                idData={myData.map((ele) => ele.id)}
                setClassicModal={setClassicModal}
                setIndex={setIndex}
                setIsOpen={setIsOpen}
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
      <CourseFormDialog
        myInitialValues={myInitialValues}
        classicModal={classicModal}
        setClassicModal={setClassicModal}
        setNotify={setNotify}
        index={index}
        setData={setMyData}
      />
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
      <Notification notify={notify} setNotify={setNotify} />
      <ViewFileDialog
        classicModal={isOpen}
        setClassicModal={setIsOpen}
        data={myInitialValues}
      />
    </GridContainer>
  );
}
