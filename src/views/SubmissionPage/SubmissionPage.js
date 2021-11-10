import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Box, CircularProgress } from "@material-ui/core";
// react-router-dom
import { useParams } from "react-router-dom";
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

import { usePromiseResult } from "use-promise-result";
import { getAllSubmissionWithActivity } from "services/activityServices";
import SubmissionLink from "./Sections/SubmissionLink";
import Footer from "components/Footer/Footer";

const useStyles = makeStyles(styles);

export default function SubmissionPage(props) {
  const classes = useStyles();

  const { id } = useParams();

  const { data, success } = usePromiseResult(() =>
    getAllSubmissionWithActivity(id)
  );

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
          <SubmissionLink activityID={id} />
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem className={classes.navWrapper}>
              {success ? (
                <SubmissionStatus submissionList={data} activityID={id} />
              ) : (
                <SubmissionStatus submissionList={[]} activityID={id} />
              )}
              {success ? (
                <SubmissionList submissionList={data} />
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "30px",
                  }}
                >
                  <CircularProgress />
                </Box>
              )}
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
}
