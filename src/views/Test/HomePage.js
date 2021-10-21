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
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import {
  MyCustomHeaderLeftLinks,
  MyCustomHeaderRightLinks,
} from "components/Header/MyCustomHeaderLinks";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import Parallax from "components/Parallax/Parallax.js";
import MyCustomParallax from "components/Parallax/MyCustomParallax";

import styles from "assets/jss/material-kit-react/views/homePage.js";

// import image from "assets/img/faces/avatar.jpg";

const useStyles = makeStyles(styles);

const classList = [
  {
    id: "1",
    course: "Web Design & Development",
    class: "GCH0714",
  },
  {
    id: "2",
    course: "Web Design & Development",
    class: "GCH0715",
  },
  {
    id: "3",
    course: "Internet of Things",
    class: "GCH0714",
  },
  {
    id: "4",
    course: "Internet of Things",
    class: "GCH0716",
  },
  {
    id: "5",
    course: "Programming Advance",
    class: "GCH0714",
  },
];

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
      <Parallax small filter image={require("assets/img/cms-img.jpg").default}>
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
        <GridContainer>
          {classList.map((item) => (
            <GridItem xs={12} sm={12} md={3} key={item.id}>
              <Card className={classes.card}>
                <CardHeader className={classes.cardHeader}>
                  <MyCustomParallax
                    image={require("assets/img/cms-img.jpg").default}
                    exSmall
                    className={
                      classes.myParallax +
                      " " +
                      classes.imgRounded +
                      " " +
                      classes.imgFluid
                    }
                  />
                </CardHeader>
                <CardBody className={classes.cardBody}>
                  <h4>{item.course}</h4>
                  <h6>{item.class}</h6>
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                  <Button simple color="primary" size="lg">
                    <Link to="/class-page">View</Link>
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          ))}
        </GridContainer>
      </div>
      <Footer />
    </div>
  );
}
