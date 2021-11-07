import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import { MoreVert } from "@material-ui/icons";
// core components
// import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import ConfirmDialog from "components/Dialog/MyConfirmDialog";
import Notification from "components/MyNotifications/Notification";

import { ClassActivityFormDialog } from "components/Dialog/MyCustomDialog.js";

import ClassMaterial from "./ClassMaterial.js";

import styles from "assets/jss/material-kit-react/views/classSections/classActivityStyle.js";

import { baseURL } from "services/axios.js";
import { getRole } from "services/userServices.js";
import { deleteClassActivity } from "services/classServices.js";

const useStyles = makeStyles(styles);

export default function ClassActivity(props) {
  const classes = useStyles();
  const [classicModal, setClassicModal] = React.useState(false);
  const [confirmDialog, setConfirmDialog] = React.useState({
    isOpen: false,
    title: "",
    subTitle: "",
    attachment: [],
  });
  const [notify, setNotify] = React.useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const role = getRole();

  const { tutor, description, title, created, file, activity_id } = props;

  const initialValues = {
    title: title,
    description: description == null ? "" : description,
    file: file,
  };

  return (
    <Card className={classes.card}>
      <CardHeader color="primary" className={classes.cardHeader}>
        <GridContainer className={classes.cardHeaderContainer}>
          <GridItem xs={2} className={classes.avatar}>
            <img
              src={baseURL + tutor.profile_image}
              alt="..."
              className={classes.imgRoundedCircle + " " + classes.imgFluid}
            />
          </GridItem>
          <GridItem xs={10}>
            <p className={classes.name}>
              {tutor.first_name} {tutor.last_name}
            </p>
            <p className={classes.timer}>
              {new Date(created).toLocaleString("en-US")}
            </p>
          </GridItem>
          {role == "tutor" ? (
            <span className={classes.btnEditOrDelete}>
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
                        title: "Delete your class activity?",
                        subTitle:
                          "You can't undo this action. " +
                          `"` +
                          initialValues.title +
                          `"` +
                          " activity will be delete.",
                        attachment: [],
                        onConfirm: async () => {
                          const result = await deleteClassActivity(activity_id);
                          if (result.status == 204) {
                            setConfirmDialog({
                              ...confirmDialog,
                              isOpen: false,
                            });
                            setNotify({
                              isOpen: true,
                              message: "Delete class activity successfully.",
                              type: "success",
                            });
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
        </GridContainer>
      </CardHeader>
      <CardBody className={classes.cardBody}>
        <h6>{initialValues.title}</h6>
        <p>{initialValues.description}</p>
      </CardBody>
      <CardFooter className={classes.cardFooter}>
        <GridContainer justify={"center"} className={classes.materialContainer}>
          {initialValues.file.map((item) => (
            <GridItem
              xs={12}
              sm={12}
              md={6}
              className={classes.materialItem}
              key={item.id}
            >
              <ClassMaterial name={item.file_name} type={item.file_type} />
            </GridItem>
          ))}
        </GridContainer>
      </CardFooter>
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
      <ClassActivityFormDialog
        classicModal={classicModal}
        setClassicModal={setClassicModal}
        myInitialValues={initialValues}
        classOrActivityID={activity_id}
        setNotify={setNotify}
        isEdit={true}
      />
      <Notification notify={notify} setNotify={setNotify} />
    </Card>
  );
}
