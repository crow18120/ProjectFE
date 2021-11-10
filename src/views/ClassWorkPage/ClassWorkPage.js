import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// react-router-dom
import { Link, useParams, useHistory } from "react-router-dom";

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
import Notification from "components/MyNotifications/Notification";

import styles from "assets/jss/material-kit-react/views/classWorkPage.js";

import { getRole } from "services/userServices.js";
import { getActivity } from "services/activityServices";
import { usePromiseResult } from "use-promise-result";
import { deleteClassWork } from "services/classServices";
import { Button, Dialog, Typography } from "@material-ui/core";
import Footer from "components/Footer/Footer";

const useStyles = makeStyles(styles);

export default function ClassWorkPage(props) {
  const classes = useStyles();

  const { id } = useParams();

  const history = useHistory();

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
    isAssignment: false,
  });

  const [notify, setNotify] = React.useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const [isOpen, setIsOpen] = React.useState(false);

  const goBack = () => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
    history.goBack();
  };

  React.useEffect(() => {
    success
      ? setInitialValues({
          ...initialValues,
          title: data.name,
          description: data.description,
          file: data.materials,
          dueDate: data.deadline_date,
          isAssignment: data.is_assignment,
        })
      : null;
  }, [success]);
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
                <Link to={`/class-page/${data.class_obj}`}>
                  <h1 className={classes.title}>
                    {data.class_detail.name} •{" "}
                    {data.class_detail.course_detail.name}
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
                                onConfirm: async () => {
                                  const result = await deleteClassWork(id);
                                  if (result.status == 204) {
                                    setConfirmDialog({
                                      ...confirmDialog,
                                      isOpen: false,
                                    });
                                    setNotify({
                                      isOpen: true,
                                      message: "Delete classwork successfully.",
                                      type: "success",
                                    });
                                    setIsOpen(true);
                                  } else if (result.status != 204) {
                                    setNotify({
                                      isOpen: true,
                                      message: "Something error...",
                                      type: "error",
                                    });
                                  }
                                },
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
                  {data.class_detail.tutor_detail.first_name +
                    " " +
                    data.class_detail.tutor_detail.last_name}{" "}
                  • {new Date(data.created_date).toLocaleString("en-US")}.
                </h5>
                <h6>
                  Due date:{" "}
                  {initialValues.dueDate == null ? (
                    <span>No due date</span>
                  ) : new Date(initialValues.dueDate) < new Date() ? (
                    <span className={classes.deadlineTimer}>
                      {new Date(initialValues.dueDate).toLocaleString("en-US")}
                    </span>
                  ) : (
                    <span className={classes.deadlineTimerGreen}>
                      {new Date(initialValues.dueDate).toLocaleString("en-US")}
                    </span>
                  )}
                </h6>
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
                    <ClassMaterial
                      name={item.file_name}
                      type={item.file_type}
                      linkMaterial={item.file}
                    />
                  </GridItem>
                ))}
              </GridContainer>
            </GridItem>
            <GridItem xs={12} sm={12} md={3} className={classes.navWrapper}>
              {role == "student" ? <ClassSubmission activityID={id} /> : null}
              {role == "tutor" ? <ViewSubmission activityID={id} /> : null}
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <Footer />
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
      <ClassWorkFormDialog
        classicModal={classicModal}
        setClassicModal={setClassicModal}
        myInitialValues={initialValues}
        classOrActivityID={id}
        setNotify={setNotify}
        isEdit={true}
      />
      <Notification notify={notify} setNotify={setNotify} />
      <Dialog open={isOpen} classes={{ paperScrollPaper: classes.dialogBack }}>
        <Typography classes={{ body1: classes.bodyBack }}>
          This Classwork is not available.
        </Typography>
        <Button onClick={goBack}>Go Back</Button>
      </Dialog>
    </div>
  ) : null;
}
