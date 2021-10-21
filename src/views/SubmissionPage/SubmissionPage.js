import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// react-router-dom
import { Link } from "react-router-dom";

// @material-ui/icons
import { MoreVert } from "@material-ui/icons";
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
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";

import ClassMaterial from "views/SubmissionPage/Sections/ClassMaterial";

import styles from "assets/jss/material-kit-react/views/submissionPage.js";

const useStyles = makeStyles(styles);

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
            <GridItem xs={12} sm={12} md={9} className={classes.navWrapper}>
              <div className={classes.infoSubmission}>
                <h2>
                  Đây là tên của classwork{" "}
                  <span className={classes.btnSubmission}>
                    <CustomDropdown
                      left
                      hoverColor="info"
                      btnIcon={<MoreVert />}
                      caret={false}
                      buttonProps={{
                        className: classes.navLink,
                        color: "transparent",
                        size: "sm",
                      }}
                      dropdownList={[
                        <span
                          style={{ display: "block" }}
                          key="edit-classwork"
                          //   onClick={() => setClassicModal(true)}
                        >
                          Edit
                        </span>,
                        <span
                          style={{ display: "block" }}
                          key="delete-classwork"
                          //   onClick={() => setClassicModal(true)}
                        >
                          Delete
                        </span>,
                      ]}
                    />
                  </span>
                </h2>
                <h5>Đây là tên giáo viên • Ngày giao.</h5>
                <h6>
                  Deadline:{" "}
                  <span className={classes.deadlineTimer}>Hạn nộp.</span>
                </h6>
                <p>
                  Đây là hướng dẫn (Descriptions). Đây là hướng dẫn
                  (Descriptions). Đây là hướng dẫn (Descriptions). Đây là hướng
                  dẫn (Descriptions). Đây là hướng dẫn (Descriptions). Đây là
                  hướng dẫn (Descriptions). Đây là hướng dẫn (Descriptions).{" "}
                </p>
              </div>
              <ClassMaterial />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
