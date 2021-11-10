import React from "react";
// nodejs library that concatenates classes

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// react-router-dom
import { useParams } from "react-router-dom";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import {
  MyCustomHeaderLeftLinks,
  MyCustomHeaderRightLinks,
} from "components/Header/MyCustomHeaderLinks";

import styles from "assets/jss/material-kit-react/views/viewSubmissionPage.js";

import ViewSubFile from "./Sections/ViewSubFile";
import StudentSubmit from "./Sections/StudentSubmit";
import TeacherWork from "./Sections/TeacherWork";
import ConfirmDialog from "components/Dialog/MyConfirmDialog";
import Notification from "components/MyNotifications/Notification";

import { usePromiseResult } from "use-promise-result";
import { getSubmissionWithActAndStu } from "services/activityServices";
import { gradeSubmission } from "services/activityServices";

const useStyles = makeStyles(styles);

export default function ViewSubmissionPage(props) {
  const classes = useStyles();

  const { id, stID } = useParams();

  const { data, success } = usePromiseResult(() =>
    getSubmissionWithActAndStu(id, stID)
  );

  const [viewFile, setViewFile] = React.useState(data);
  const [myGraded, setMyGraded] = React.useState("");
  const [myError, setMyError] = React.useState(" ");
  const [myStatus, setMyStatus] = React.useState("Unmarked");
  const [myID, setMyID] = React.useState("");
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

  React.useEffect(() => {
    success
      ? data.materials.length == 0
        ? setViewFile("")
        : setViewFile(data.materials[0])
      : null;

    success ? (data.graded != -1 ? setMyGraded(data.graded) : "") : null;
    success ? (data.graded != -1 ? setMyError("") : " ") : null;
    success ? (data.graded != -1 ? setMyStatus("Marked") : "Unmarked") : null;
    success ? setMyID(data.id) : null;
  }, [success]);

  console.log(myID);

  const handleChangeGraded = (value) => {
    setMyGraded(value);
  };

  const handleChangeError = (value) => {
    setMyError(value);
  };

  const { ...rest } = props;

  const handleSubmit = () => {
    setConfirmDialog({
      ...ConfirmDialog,
      isOpen: true,
      title: "Submit your Work?",
      attachment: [],
      onConfirm: async () => {
        const result = await gradeSubmission({ graded: myGraded }, myID);
        if (result.status == 200) {
          setConfirmDialog({
            ...confirmDialog,
            isOpen: false,
          });
          setNotify({
            isOpen: true,
            message: "Graded submisison successfully.",
            type: "success",
          });
          setMyStatus("Marked");
        } else if (result.status != 200) {
          setNotify({
            isOpen: true,
            message: "Something error...",
            type: "error",
          });
        }
      },
    });
  };

  return (
    <div className={classes.viewSubPageContainer}>
      <Header
        color="white"
        brand={<MyCustomHeaderLeftLinks />}
        rightLinks={<MyCustomHeaderRightLinks />}
        isViewSubFile={true}
        {...rest}
      />
      <StudentSubmit
        classwork={data ? data.activity_detail.name : "Classwork"}
        status={myStatus}
        activityID={id}
        student={data ? data.student_detail : null}
        error={myError}
        handleSubmit={handleSubmit}
      />
      <div
        style={{
          display: "flex",
        }}
      >
        <ViewSubFile isViewSubFile={true} file={viewFile} />
        <TeacherWork
          submission={data}
          setViewFile={setViewFile}
          graded={myGraded}
          error={myError}
          handleChangeGraded={handleChangeGraded}
          handleChangeError={handleChangeError}
        />
      </div>
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
      <Notification notify={notify} setNotify={setNotify} />
    </div>
  );
}
