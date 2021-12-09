import React from "react";
import { v4 } from "uuid";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Input, Typography } from "@material-ui/core";
// @material-ui/icons
// import Close from "@material-ui/icons/Close";
// core components
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import ConfirmDialog from "components/Dialog/MyConfirmDialog";

import SubmissionMaterial from "./SubmissionMaterial";

import styles from "assets/jss/material-kit-react/views/classWorkSections/classWorkStyle.js";
import { usePromiseResult } from "use-promise-result";
import { getSubmissionWithActAndStu } from "services/activityServices";
import { decodeJwtToken } from "services/userServices";
import { submitSubmission } from "services/activityServices";
import Notification from "components/MyNotifications/Notification";

const useStyles = makeStyles(styles);

const getFilesFromMyCustomList = (myCustomList) => {
  const array = [];
  myCustomList.map((ele) => array.push(ele["file"]));
  return array;
};

export default function ClassSubmission(props) {
  const classes = useStyles();

  const { activityID } = props;

  const studentID = decodeJwtToken().account_id;

  const { data, success } = usePromiseResult(() =>
    getSubmissionWithActAndStu(activityID, studentID)
  );

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

  const [files, setFiles] = React.useState([]);
  const [isSubmit, setIsSubmit] = React.useState(false);
  const [isGraded, setIsGraded] = React.useState(false);
  const hiddenFileInput = React.useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleAddFile = (event) => {
    const newFiles = [...event.target.files].map(
      (ele) => (ele = { file: ele, id: v4() })
    );
    setFiles([...files, ...newFiles]);
    console.log(files);
  };

  const handleDeleteFile = (id) => {
    const newFilesList = files.filter((ele) => ele.id != id);
    setFiles(newFilesList);
  };

  React.useEffect(() => {
    success
      ? setFiles(
          data.materials.map(
            (ele) =>
              (ele = {
                file: ele,
                id: v4(),
              })
          )
        )
      : null;

    success
      ? data.materials.length > 0
        ? setIsSubmit(true)
        : setIsSubmit(false)
      : null;

    success
      ? data.graded != -1
        ? setIsGraded(true)
        : setIsGraded(false)
      : null;
  }, [success]);

  return (
    <Card className={classes.card}>
      <CardHeader color="primary" className={classes.cardHeader}>
        <h4>Your work</h4>
      </CardHeader>
      <CardBody className={classes.cardBody}>
        <GridContainer justify={"center"} className={classes.materialContainer}>
          {files.map((item) => (
            <GridItem xs={12} className={classes.materialItem} key={item.id}>
              <SubmissionMaterial
                name={item.file.name || item.file.file_name}
                id={item.id}
                handleDeleteFile={handleDeleteFile}
                isEdit={isSubmit}
              />
            </GridItem>
          ))}
        </GridContainer>
        {isSubmit ? null : (
          <>
            <Input
              type="file"
              inputRef={hiddenFileInput}
              inputProps={{ multiple: true, accept: "application/pdf" }}
              onChange={handleAddFile}
              className={classes.inputFile}
            />
            <Button
              onClick={handleClick}
              color="primary"
              className={classes.btnSubmit}
            >
              Upload files
            </Button>
          </>
        )}
      </CardBody>
      <CardFooter className={classes.cardFooter}>
        {isGraded ? (
          <Typography classes={{ root: classes.textMark }}>
            Mark: {data.graded}
          </Typography>
        ) : isSubmit ? (
          <Button
            color="danger"
            className={classes.btnSubmit}
            onClick={() => {
              setConfirmDialog({
                ...confirmDialog,
                isOpen: true,
                title: "Unsubmit your work?",
                subTitle: "Remember submit your changes.",
                onConfirm: () => {
                  setConfirmDialog({
                    ...confirmDialog,
                    isOpen: false,
                  });
                  setIsSubmit(false);
                },
              });
            }}
          >
            Unsubmit
          </Button>
        ) : (
          <Button
            color="rose"
            className={classes.btnSubmit}
            onClick={() => {
              if (files.length == 0) return;
              setConfirmDialog({
                ...confirmDialog,
                isOpen: true,
                title: "Submit your work?",
                subTitle: files.length + " files will be submitted.",
                attachment: files,
                onConfirm: async () => {
                  const result = await submitSubmission(
                    { file: getFilesFromMyCustomList(files) },
                    data.id
                  );
                  if (result.status == 201 || result.status == 200) {
                    setConfirmDialog({
                      ...confirmDialog,
                      isOpen: false,
                    });
                    setNotify({
                      isOpen: true,
                      message: "Submit your work successfully.",
                      type: "success",
                    });
                    setIsSubmit(true);
                  } else if (result.status != 201 && result.status != 200) {
                    setNotify({
                      isOpen: true,
                      message: "Something wrong...",
                      type: "error",
                    });
                  }
                },
              });
            }}
          >
            Submit your work
          </Button>
        )}
      </CardFooter>
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
      <Notification notify={notify} setNotify={setNotify} />
    </Card>
  );
}
