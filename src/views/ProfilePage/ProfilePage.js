import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import {
  MyCustomHeaderLeftLinks,
  MyCustomHeaderRightLinks,
} from "components/Header/MyCustomHeaderLinks";

import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Header from "components/Header/Header.js";
import Parallax from "components/Parallax/Parallax.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import { UserFormDialog } from "components/Dialog/MyCustomDialog.js";

import profile from "assets/img/faces/christian.jpg";

import styles from "assets/jss/material-kit-react/views/myProfilePage.js";

const useStyles = makeStyles(styles);

const inforUser = {
  firstName: "Anh",
  lastName: "Nguyen Quoc",
  email: "user27102000@rbc.vn",
  phone: "0352643890",
  location: "Thai Nguyen",
  DoB: "2000/10/27",
  description: "Thich xem Film",
  interest: "Film, Music, Football, ...",
};

export default function ProfilePage(props) {
  const classes = useStyles();
  const [classicModal, setClassicModal] = React.useState(false);

  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
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
        exSmall
        filter
        image={require("assets/img/profile-bg.jpg").default}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                    <CustomDropdown
                      left
                      hoverColor="info"
                      buttonIcon="settings"
                      buttonProps={{
                        className: classes.navLink,
                        color: "transparent",
                      }}
                      dropdownList={[
                        <span
                          style={{ display: "block" }}
                          key="edit-info"
                          onClick={() => setClassicModal(true)}
                        >
                          Change Profile
                        </span>,
                        { divider: true },
                        "Change Password",
                      ]}
                    />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>
                      {inforUser.firstName + " " + inforUser.lastName}
                    </h3>
                    <h6>{inforUser.email}</h6>
                  </div>
                </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={8} className={classes.infoField}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={3}>
                    <h5 className={classes.title}>Date of Birth</h5>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={9}>
                    <h5 className={classes.txtTitle}>{inforUser.DoB}</h5>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={3}>
                    <h5 className={classes.title}>Location</h5>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={9}>
                    <h5 className={classes.txtTitle}>{inforUser.location}</h5>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={3}>
                    <h5 className={classes.title}>Telephone</h5>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={9}>
                    <h5 className={classes.txtTitle}>{inforUser.phone}</h5>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem>
                    <h5 className={classes.title}>Description</h5>
                  </GridItem>
                  <GridItem>{inforUser.description}</GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem>
                    <h5 className={classes.title}>Interest</h5>
                  </GridItem>
                  <GridItem>{inforUser.interest}</GridItem>
                </GridContainer>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <UserFormDialog
        classicModal={classicModal}
        setClassicModal={setClassicModal}
        myInitialValues={inforUser}
      />
      <Footer />
    </div>
  );
}
