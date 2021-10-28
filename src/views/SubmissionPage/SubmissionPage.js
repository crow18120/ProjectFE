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
import ConfirmDialog from "components/Dialog/MyConfirmDialog";
import { ClassWorkFormDialog } from "components/Dialog/MyCustomDialog";

import ClassMaterial from "./Sections/ClassMaterial";
import ClassSubmission from "./Sections/ClassSubmission";
import ViewSubmission from "./Sections/ViewSubmission";

import styles from "assets/jss/material-kit-react/views/submissionPage.js";

const useStyles = makeStyles(styles);

const materials = [
  {
    id: "1",
    name: "Đây là tên file. Đây là tên file. Đây là tên file.",
    type: "Đây là dạng file.",
  },
  {
    id: "2",
    name: "Đây là tên file. Đây là tên file. Đây là tên file.",
    type: "Đây là dạng file.",
  },
  {
    id: "3",
    name: "Đây là tên file. Đây là tên file. Đây là tên file.",
    type: "Đây là dạng file.",
  },
];

const initialValues = {
  title: "Đây là tên classwork",
  description:
    "Đây là hướng dẫn (Descriptions). Đây là hướng dẫn (Descriptions). Đây là hướng dẫn (Descriptions). Đây là hướng dẫn (Descriptions). Đây là hướng dẫn (Descriptions). Đây là hướng dẫn (Descriptions). Đây là hướng dẫn (Descriptions)",
  file: materials,
  dueDate: new Date().toString(),
};

export default function SubmissionPage(props) {
  const classes = useStyles();
  const [classicModal, setClassicModal] = React.useState(false);
  const [confirmDialog, setConfirmDialog] = React.useState({
    isOpen: false,
    title: "",
    subTitle: "",
    attachment: [],
  });

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
                  {initialValues.title}
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
                          onClick={() => setClassicModal(true)}
                        >
                          Edit
                        </span>,
                        <span
                          style={{ display: "block" }}
                          key="delete-classwork"
                          onClick={() =>
                            setConfirmDialog({
                              ...ConfirmDialog,
                              isOpen: true,
                              title: "Delete your classwork?",
                              subTitle: "You can't undo this action.",
                              attachment: [],
                            })
                          }
                        >
                          Delete
                        </span>,
                      ]}
                    />
                  </span>
                </h2>
                <h5>Đây là tên giáo viên • Ngày giao.</h5>
                <h6>
                  Due date:{" "}
                  <span className={classes.deadlineTimer}>
                    {initialValues.dueDate}
                  </span>
                </h6>
                <p>{initialValues.description}</p>
              </div>
              <GridContainer
                justify={"center"}
                className={classes.materialContainer}
              >
                {materials.map((item) => (
                  <GridItem
                    xs={12}
                    sm={12}
                    md={6}
                    className={classes.materialItem}
                    key={item.id}
                  >
                    <ClassMaterial name={item.name} type={item.type} />
                  </GridItem>
                ))}
              </GridContainer>
            </GridItem>
            <GridItem xs={12} sm={12} md={3} className={classes.navWrapper}>
              <ClassSubmission />
              <ViewSubmission />
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
      <ClassWorkFormDialog
        classicModal={classicModal}
        setClassicModal={setClassicModal}
        myInitialValues={initialValues}
      />
    </div>
  );
}
