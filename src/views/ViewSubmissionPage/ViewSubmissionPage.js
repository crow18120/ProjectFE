import React from "react";
// nodejs library that concatenates classes
// import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// react-router-dom
import { useParams } from "react-router-dom";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
// import Footer from "components/Footer/Footer.js";
// import Button from "components/CustomButtons/Button.js";
import {
  MyCustomHeaderLeftLinks,
  MyCustomHeaderRightLinks,
} from "components/Header/MyCustomHeaderLinks";
// import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "components/Grid/GridItem.js";

// import SubFileList from "./Sections/SubFileList";

import styles from "assets/jss/material-kit-react/views/viewSubmissionPage.js";

import ViewSubFile from "./Sections/ViewSubFile";
import StudentSubmit from "./Sections/StudentSubmit";
import TeacherWork from "./Sections/TeacherWork";
import { usePromiseResult } from "use-promise-result";
import { getSubmissionWithActAndStu } from "services/activityServices";

const useStyles = makeStyles(styles);

export default function ViewSubmissionPage(props) {
  const classes = useStyles();

  const { id, stID } = useParams();

  console.log(id, stID);

  const { data, success } = usePromiseResult(() =>
    getSubmissionWithActAndStu(id, stID)
  );

  const [viewFile, setViewFile] = React.useState(data);

  React.useEffect(() => {
    success
      ? data.materials.length == 0
        ? setViewFile("")
        : setViewFile(data.materials[0])
      : null;
  }, [success]);

  const { ...rest } = props;

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
        status={data ? data.graded : -1}
        activityID={id}
        student={data ? data.student_detail : null}
      />
      <div
        style={{
          display: "flex",
        }}
      >
        <ViewSubFile isViewSubFile={true} file={viewFile} />
        <TeacherWork submission={data} setViewFile={setViewFile} />
      </div>
    </div>
  );
}
