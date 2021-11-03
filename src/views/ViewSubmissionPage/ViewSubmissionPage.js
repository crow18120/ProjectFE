import React from "react";
// nodejs library that concatenates classes
// import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// react-router-dom
// import { Link } from "react-router-dom";

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

const useStyles = makeStyles(styles);

export default function ViewSubmissionPage(props) {
  const classes = useStyles();

  // const files = [
  //   {
  //     id: "1",
  //     file: {
  //       name: "abc",
  //       type: "pdf",
  //     },
  //   },
  //   {
  //     id: "2",
  //     file: {
  //       name: "abc",
  //       type: "pdf",
  //     },
  //   },
  // ];

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
      <StudentSubmit />
      <div
        style={{
          display: "flex",
        }}
      >
        <ViewSubFile isViewSubFile={true} />
        <TeacherWork />
      </div>
    </div>
  );
}
