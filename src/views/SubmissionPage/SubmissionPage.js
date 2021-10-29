import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// react-router-dom
import { Link } from "react-router-dom";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
// import Footer from "components/Footer/Footer.js";
// import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import {
  MyCustomHeaderLeftLinks,
  MyCustomHeaderRightLinks,
} from "components/Header/MyCustomHeaderLinks";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/submissionPage.js";
import SubmissionStatus from "./Sections/SubmissionStatus";
import SubmissionList from "./Sections/SubmissionList";

const useStyles = makeStyles(styles);

const submissionList = [
  {
    id: "1",
    isSubmitted: true,
    isMarked: false,
    file: "4",
  },
  {
    id: "2",
    isSubmitted: false,
    isMarked: false,
    file: "0",
  },
  {
    id: "3",
    isSubmitted: true,
    isMarked: true,
    file: "2",
  },
  {
    id: "4",
    isSubmitted: true,
    isMarked: false,
    file: "3",
  },
  {
    id: "5",
    isSubmitted: true,
    isMarked: false,
    file: "1",
  },
];

export default function SubmissionPage(props) {
  const classes = useStyles();

  const { ...rest } = props;

  return (
    <div>
      <Header
        color="transparent"
        brand={<MyCustomHeaderLeftLinks />}
        rightLinks={<MyCustomHeaderRightLinks />}
        fixed
        changeColorOnScroll={{
          height: 0,
          color: "white",
        }}
        {...rest}
      />
      <Parallax
        small
        filter
        image={require("assets/img/cms-img.jpg").default}
        className={classes.classParallax}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <Link to="/class-page">
                  <h1 className={classes.title}>Course Management System</h1>
                </Link>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem className={classes.navWrapper}>
              <SubmissionStatus submissionList={submissionList} />
              <SubmissionList submissionList={submissionList} />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
