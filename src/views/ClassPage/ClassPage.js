import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// react-router-dom
// import { Link } from "react-router-dom";

// @material-ui/icons
import { Group, Work, Dashboard } from "@material-ui/icons";

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
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import ClassActivity from "views/ClassPage/Sections/ClassActivity.js";

import styles from "assets/jss/material-kit-react/views/classPage.js";

import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(styles);

export default function ClassPage(props) {
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
          height: 200,
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
                <h1 className={classes.title}>Course Management System</h1>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={11} className={classes.navWrapper}>
              <NavPills
                alignCenter
                color="primary"
                tabs={[
                  {
                    tabButton: "Stream",
                    tabIcon: Dashboard,
                    tabContent: (
                      <GridContainer justify={"center"}>
                        <GridItem xs={12} sm={12} md={3}>
                          <img
                            alt="..."
                            src={image}
                            style={{ width: "100%" }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={9}>
                          <ClassActivity />
                          <ClassActivity />
                        </GridItem>
                      </GridContainer>
                    ),
                  },
                  {
                    tabButton: "Classwork",
                    tabIcon: Work,
                    tabContent: (
                      <GridContainer justify={"center"}>
                        <GridItem xs={12} sm={12} md={8}>
                          <p>Day la container classwork</p>
                        </GridItem>
                      </GridContainer>
                    ),
                  },
                  {
                    tabButton: "People",
                    tabIcon: Group,
                    tabContent: (
                      <GridContainer justify={"center"}>
                        <GridItem xs={12} sm={12} md={8}>
                          <p>Day la container People</p>
                        </GridItem>
                      </GridContainer>
                    ),
                  },
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
