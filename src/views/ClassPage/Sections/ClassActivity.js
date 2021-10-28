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
import { ClassActivityFormDialog } from "components/Dialog/MyCustomDialog.js";

import ClassMaterial from "./ClassMaterial.js";

import styles from "assets/jss/material-kit-react/views/classSections/classActivityStyle.js";

import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(styles);

const initialValues = {
  title: "Đây là Tên của activity.",
  description:
    "Đây là Thông báo nội dung của activity. Đây là Thông báo nội dung của activity. Đây là Thông báo nội dung của activity. Đây là Thông báo nội dung của activity.",
  file: [
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
  ],
};

export default function ClassActivity() {
  const classes = useStyles();
  const [classicModal, setClassicModal] = React.useState(false);
  const [confirmDialog, setConfirmDialog] = React.useState({
    isOpen: false,
    title: "",
    subTitle: "",
    attachment: [],
  });

  return (
    <Card className={classes.card}>
      <CardHeader color="primary" className={classes.cardHeader}>
        <GridContainer className={classes.cardHeaderContainer}>
          <GridItem xs={2} className={classes.avatar}>
            <img
              src={image}
              alt="..."
              className={classes.imgRoundedCircle + " " + classes.imgFluid}
            />
          </GridItem>
          <GridItem xs={10}>
            <p className={classes.name}>Đây là tên Activity.</p>
            <p className={classes.timer}>Đây là thời gian.</p>
          </GridItem>
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
                    })
                  }
                >
                  Delete
                </span>,
              ]}
            />
          </span>
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
              <ClassMaterial name={item.name} type={item.type} />
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
      />
    </Card>
  );
}
