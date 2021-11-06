import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress, Box } from "@material-ui/core";
// react-router-dom
import { Link, useLocation } from "react-router-dom";
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
import Notification from "components/MyNotifications/Notification.js";

import styles from "assets/jss/material-kit-react/views/homePage.js";

import { getAllClass } from "services/classServices";
import { getRole } from "services/userServices";
import { usePromiseResult } from "use-promise-result";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const location = useLocation();

  const { success, data } = usePromiseResult(() => getAllClass());

  console.log(data);
  const { ...rest } = props;

  const [notify, setNotify] = React.useState({
    isOpen: false,
    message: "",
    type: "",
  });

  React.useEffect(() => {
    location.state
      ? setNotify({
          isOpen: true,
          message: "Hello user. Welcome to CMS.",
          type: "success",
        })
      : null;
  }, [location.state]);

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
        {success ? (
          <GridContainer>
            {data.map((item) => (
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
                    <h4>{item.course.name}</h4>
                    <h6>{item.name}</h6>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg">
                      {getRole() == null ? (
                        <Link to={"/login-page"}>View</Link>
                      ) : (
                        <Link
                          to={{
                            pathname: `/class-page/${item.id}`,
                            state: {
                              course: item.course.name,
                              class: item.name,
                            },
                          }}
                        >
                          View
                        </Link>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </GridItem>
            ))}
          </GridContainer>
        ) : (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </Box>
        )}
      </div>
      <Footer />
      <Notification notify={notify} setNotify={setNotify} />
    </div>
  );
}
