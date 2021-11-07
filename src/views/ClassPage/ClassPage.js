import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// react-router-dom
import { Link, useParams } from "react-router-dom";
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

import ClassActivity from "./Sections/ClassActivity.js";
import ClassWork from "./Sections/ClassWork.js";
import DeadlineWork from "./Sections/DeadlineWork";
import ClassPeople from "./Sections/ClassPeople.js";
import AddClassActivity from "./Sections/AddClassActivity.js";
import AddClassWork from "./Sections/AddClassWork.js";

import styles from "assets/jss/material-kit-react/views/classPage.js";

import { getRole } from "services/userServices.js";
import { getAllActivity } from "services/activityServices.js";
import { usePromiseResult } from "use-promise-result";

const useStyles = makeStyles(styles);

export default function ClassPage(props) {
  const classes = useStyles();

  const role = getRole();

  const { ...rest } = props;

  let { id } = useParams();

  const { data, success } = usePromiseResult(() => getAllActivity(id));

  return success ? (
    <div>
      <Header
        color="transparent"
        brand={<MyCustomHeaderLeftLinks />}
        rightLinks={<MyCustomHeaderRightLinks />}
        fixed
        changeColorOnScroll={{
          height: 100,
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
                <Link to={`/class-page/${id}`}>
                  <h1 className={classes.title}>
                    {data["class"].name} • {data["class"].course_detail.name}
                  </h1>
                </Link>
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
                          <DeadlineWork />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={9}>
                          {role == "tutor" ? (
                            <AddClassActivity
                              tutor={data["class"].tutor_detail}
                              classID={id}
                            />
                          ) : null}
                          {data["activities"].map((item) =>
                            item.is_submit ? (
                              <ClassWork
                                key={item.id}
                                id={item.id}
                                created={item.created_date}
                                deadline={item.deadline_date}
                                description={item.description}
                              />
                            ) : (
                              <ClassActivity
                                key={item.id}
                                activity_id={item.id}
                                tutor={data["class"].tutor_detail}
                                created={item.created_date}
                                description={item.description}
                                title={item.name}
                                file={item.materials}
                              />
                            )
                          )}
                        </GridItem>
                      </GridContainer>
                    ),
                  },
                  {
                    tabButton: "Classwork",
                    tabIcon: Work,
                    tabContent: (
                      <GridContainer justify={"center"}>
                        <GridItem xs={12} sm={12} md={9}>
                          {role == "tutor" ? <AddClassWork /> : null}
                          {data["activities"].map((item) =>
                            item.is_submit ? (
                              <ClassWork
                                key={item.id}
                                id={item.id}
                                created={item.created_date}
                                deadline={item.deadline_date}
                                description={item.description}
                              />
                            ) : null
                          )}
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
                          <ClassPeople />
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
  ) : null;
}
