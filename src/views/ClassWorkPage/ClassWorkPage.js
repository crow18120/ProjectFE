import React, { useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// react-router-dom
import { Link, useParams } from "react-router-dom";

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

import styles from "assets/jss/material-kit-react/views/classWorkPage.js";

import { getRole } from "services/userServices.js";
import { getActivity } from "services/activityServices";
import { usePromiseResult } from "use-promise-result";
const useStyles = makeStyles(styles);

export default function ClassWorkPage(props) {
  const classes = useStyles();

  const { id } = useParams();

  const role = getRole();

  const { data, success } = usePromiseResult(() => getActivity(id));

  const [classicModal, setClassicModal] = React.useState(false);

  const [confirmDialog, setConfirmDialog] = React.useState({
    isOpen: false,
    title: "",
    subTitle: "",
    attachment: [],
  });

  const [initialValues, setInitialValues] = React.useState({
    title: "",
    description: "",
    file: [],
    dueDate: null,
  });

  useEffect(() => {
    success
      ? setInitialValues({
          title: data.name,
          description: data.description,
          file: data.materials,
          dueDate: data.deadline_date,
        })
      : null;
  }, [success]);

  console.log(data);

  const { ...rest } = props;

  return success ? (
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
                <Link to={`/class-page/${data.class_obj.id}`}>
                  <h1 className={classes.title}>
                    {data.class_obj.name} • {data.class_obj.course.name}
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
            <GridItem xs={12} sm={12} md={9} className={classes.navWrapper}>
              <div className={classes.infoSubmission}>
                <h2>
                  {initialValues.title}
                  {role == "tutor" ? (
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
                  ) : null}
                </h2>
                <h5>
                  {data.class_obj.tutor.first_name +
                    " " +
                    data.class_obj.tutor.last_name}{" "}
                  • {new Date(data.created_date).toLocaleString("en-US")}.
                </h5>
                {initialValues.dueDate == null ? null : (
                  <h6>
                    Due date:{" "}
                    <span className={classes.deadlineTimer}>
                      {new Date(initialValues.dueDate).toLocaleString("en-US")}
                    </span>
                  </h6>
                )}
                <p>{initialValues.description}</p>
              </div>
              <GridContainer
                justify={"center"}
                className={classes.materialContainer}
              >
                {initialValues.file.map((item) => (
                  <GridItem
                    xs={12}
                    sm={12}
                    md={6}
                    className={classes.materialItem}
                    key={item.id}
                  >
                    <ClassMaterial name={item.file} type={item.activity} />
                  </GridItem>
                ))}
              </GridContainer>
            </GridItem>
            <GridItem xs={12} sm={12} md={3} className={classes.navWrapper}>
              {role == "student" ? <ClassSubmission /> : null}
              {role == "tutor" ? <ViewSubmission /> : null}
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
  ) : null;
}
