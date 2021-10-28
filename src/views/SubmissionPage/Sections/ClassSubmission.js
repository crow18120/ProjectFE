import React from "react";
import { v4 } from "uuid";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Input } from "@material-ui/core";
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

import styles from "assets/jss/material-kit-react/views/submissionSections/submissionStyle.js";

const useStyles = makeStyles(styles);

const submission = {
  grade: -1,
  files: [],
  isSubmit: false,
};

export default function ClassSubmission() {
  const classes = useStyles();
  const [files, setFiles] = React.useState(submission.files);
  const [confirmDialog, setConfirmDialog] = React.useState({
    isOpen: false,
    title: "",
    subTitle: "",
    attachment: [],
  });
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
                name={item.file.name}
                id={item.id}
                handleDeleteFile={handleDeleteFile}
              />
            </GridItem>
          ))}
        </GridContainer>
        {submission.isSubmit ? null : (
          <>
            <Input
              type="file"
              inputRef={hiddenFileInput}
              inputProps={{ multiple: true }}
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
        {submission.isSubmit ? (
          <Button color="danger" className={classes.btnSubmit}>
            Unsubmit
          </Button>
        ) : (
          <Button
            color="rose"
            className={classes.btnSubmit}
            onClick={() => {
              if (files.length == 0) return;
              setConfirmDialog({
                ...ConfirmDialog,
                isOpen: true,
                title: "Submit your work?",
                subTitle: files.length + " files will be submitted.",
                attachment: files,
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
    </Card>
  );
}
