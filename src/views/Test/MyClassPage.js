import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// react-router-dom
// import { Link } from "react-router-dom";
// @material-ui/icons
// import Camera from "@material-ui/icons/Camera";
// import Palette from "@material-ui/icons/Palette";
// import Favorite from "@material-ui/icons/Favorite";
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
// import Card from "components/Card/Card.js";
// import CardBody from "components/Card/CardBody.js";
// import CardHeader from "components/Card/CardHeader.js";
// import CardFooter from "components/Card/CardFooter.js";
import Parallax from "components/Parallax/Parallax.js";
// import MyCustomParallax from "components/Parallax/MyCustomParallax";

import styles from "assets/jss/material-kit-react/views/classPage.js";

// import image from "assets/img/faces/avatar.jpg";

const useStyles = makeStyles(styles);

// const classList = [
//   {
//     id: "1",
//     course: "Web Design & Development",
//     class: "GCH0714",
//   },
//   {
//     id: "2",
//     course: "Web Design & Development",
//     class: "GCH0715",
//   },
//   {
//     id: "3",
//     course: "Internet of Things",
//     class: "GCH0714",
//   },
//   {
//     id: "4",
//     course: "Internet of Things",
//     class: "GCH0716",
//   },
//   {
//     id: "5",
//     course: "Programming Advance",
//     class: "GCH0714",
//   },
// ];

export default function ProfilePage(props) {
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
        exSmall
        filter
        image={require("assets/img/cms-img.jpg").default}
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
      <div className={classNames(classes.main, classes.mainRaised)}></div>
    </div>
  );
}
