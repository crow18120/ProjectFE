import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Slide from "@material-ui/core/Slide";
import Tooltip from "@material-ui/core/Tooltip";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
import { FileCopy } from "@material-ui/icons";
import Check from "@material-ui/icons/Check";

// import custome component
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CustomInput from "components/CustomInput/CustomInput";
import DatePicker from "components/MyCustomDateTimePicker/DatePicker";
import DateTimePicker from "components/MyCustomDateTimePicker/DateTimePicker";
import SubmissionMaterial from "components/Material/SubmissionMaterial";
// import validation yup, formik
import * as yup from "yup";
import { useFormik } from "formik";
// import styles
import styles from "assets/jss/material-kit-react/components/myCustomeDialog.js";
import { v4 } from "uuid";

import { addClassActivity } from "services/classServices";
import { editClassActivity } from "services/classServices";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
Transition.displayName = "Transition";

const useStyles = makeStyles(styles);

const getFilesFromMyCustomList = (myCustomList) => {
  const array = [];
  myCustomList.map((ele) => array.push(ele["file"]));
  return array;
};

export function ProfileUserFormDialog(props) {
  const classes = useStyles();
  const { classicModal, setClassicModal, myInitialValues } = props;

  const formik = useFormik({
    initialValues: myInitialValues,
    validationSchema: yup.object({
      firstName: yup.string().required("First name is required."),
      lastName: yup.string().required("Last name is required."),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Dialog
      classes={{
        root: classes.center,
        paper: classes.modal,
      }}
      open={classicModal}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => setClassicModal(false)}
      aria-labelledby="classic-modal-slide-title"
      aria-describedby="classic-modal-slide-description"
    >
      <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
        <DialogTitle
          id="classic-modal-slide-title"
          disableTypography
          className={classes.modalHeader}
        >
          <IconButton
            className={classes.modalCloseButton}
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={() => setClassicModal(false)}
          >
            <Close className={classes.modalClose} />
          </IconButton>
          <h4 className={classes.modalTitle}>Change Profile</h4>
        </DialogTitle>
        <DialogContent
          id="classic-modal-slide-description"
          className={classes.modalBody}
        >
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="First Name"
                id="firstName"
                name="firstName"
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                onChange={formik.handleChange}
                value={formik.values.firstName}
                helperText={formik.touched.firstName && formik.errors.firstName}
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  type: "text",
                }}
              />
              <CustomInput
                labelText="Phone"
                id="phone"
                name="phone"
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                onChange={formik.handleChange}
                value={formik.values.phone}
                helperText={formik.touched.phone && formik.errors.phone}
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  type: "text",
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Last Name"
                id="lastName"
                name="lastName"
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                onChange={formik.handleChange}
                value={formik.values.lastName}
                helperText={formik.touched.lastName && formik.errors.lastName}
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  type: "text",
                }}
              />
              <DatePicker
                name="DoB"
                label="Date of Birth"
                formik={formik}
                className={{
                  root: classes.datepickerRoot,
                  MuiInputBaseRoot: classes.inputDatepicker,
                }}
              />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem>
              <CustomInput
                labelText="Location"
                id="location"
                name="location"
                error={
                  formik.touched.location && Boolean(formik.errors.location)
                }
                onChange={formik.handleChange}
                value={formik.values.location}
                helperText={formik.touched.location && formik.errors.location}
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  type: "text",
                }}
              />
            </GridItem>
            <GridItem>
              <CustomInput
                labelText="Description"
                id="description"
                name="description"
                multiline
                error={
                  formik.touched.description &&
                  Boolean(formik.errors.description)
                }
                onChange={formik.handleChange}
                value={formik.values.description}
                helperText={
                  formik.touched.description && formik.errors.description
                }
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  type: "text",
                }}
              />
            </GridItem>
            <GridItem>
              <CustomInput
                labelText="Interest"
                id="interest"
                name="interest"
                multiline
                error={
                  formik.touched.interest && Boolean(formik.errors.interest)
                }
                onChange={formik.handleChange}
                value={formik.values.interest}
                helperText={formik.touched.interest && formik.errors.interest}
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  type: "text",
                }}
              />
            </GridItem>
          </GridContainer>
        </DialogContent>
        <DialogActions className={classes.modalFooter}>
          <Button color="transparent" type="submit" simple>
            Submit
          </Button>
          <Button color="warning" type="reset" simple>
            Reset
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

///
export function ClassActivityFormDialog(props) {
  const classes = useStyles();
  const {
    classicModal,
    setClassicModal,
    myInitialValues,
    classOrActivityID,
    setNotify,
    isEdit,
  } = props;
  const formik = useFormik({
    initialValues: myInitialValues,
    validationSchema: yup.object({
      title: yup.string().required("Title is required"),
    }),
    onSubmit: async (values) => {
      if (!isEdit) {
        const result = await addClassActivity(values, classOrActivityID);
        if (result.status == 201) {
          setClassicModal(false);
          setNotify({
            isOpen: true,
            message: "Add class activity successfully.",
            type: "success",
          });
        } else if (result.status != 201) {
          setNotify({
            isOpen: true,
            message: "Something wrong...",
            type: "error",
          });
        }
      } else {
        const result = await editClassActivity(values, classOrActivityID);
        if (result.status == 201 || result.status == 200) {
          setClassicModal(false);
          setNotify({
            isOpen: true,
            message: "Edit class activity successfully.",
            type: "success",
          });
        } else if (result.status != 201 && result.status != 200) {
          setNotify({
            isOpen: true,
            message: "Something wrong...",
            type: "error",
          });
        }
      }
    },
  });

  const myInitialFilesValue = myInitialValues.file.map(
    (ele) =>
      (ele = {
        file: ele,
        id: v4(),
      })
  );

  const [files, setFiles] = React.useState(myInitialFilesValue);
  const hiddenFileInput = React.useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleAddFile = (event) => {
    const newFiles = [...event.target.files].map(
      (ele) => (ele = { file: ele, id: v4() })
    );
    setFiles([...files, ...newFiles]);
  };

  const handleDeleteFile = (id) => {
    const newFilesList = files.filter((ele) => ele.id != id);
    setFiles(newFilesList);
  };

  const handleReset = () => {
    formik.handleReset();
    setFiles(myInitialFilesValue);
  };

  React.useEffect(() => {
    formik.setFieldValue("file", getFilesFromMyCustomList(files), false);
    return null;
  }, [files]);

  return (
    <Dialog
      classes={{
        root: classes.center,
        paper: classes.modal + " " + classes.myFormWidth,
      }}
      open={classicModal}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => setClassicModal(false)}
      aria-labelledby="classic-modal-slide-title"
      aria-describedby="classic-modal-slide-description"
    >
      <form onSubmit={formik.handleSubmit} onReset={handleReset}>
        <DialogTitle
          id="classic-modal-slide-title"
          disableTypography
          className={classes.modalHeader}
        >
          <IconButton
            className={classes.modalCloseButton}
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={() => setClassicModal(false)}
          >
            <Close className={classes.modalClose} />
          </IconButton>
          <h4 className={classes.modalTitle}>Class Activity</h4>
        </DialogTitle>
        <DialogContent
          id="classic-modal-slide-description"
          className={classes.modalBody}
        >
          <GridContainer>
            <GridItem>
              <CustomInput
                labelText="Your Title"
                id="title"
                name="title"
                error={formik.touched.title && Boolean(formik.errors.title)}
                onChange={formik.handleChange}
                value={formik.values.title}
                helperText={formik.touched.title && formik.errors.title}
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  type: "text",
                }}
              />
            </GridItem>
            <GridItem>
              <CustomInput
                labelText="Description"
                id="description"
                name="description"
                multiline
                error={
                  formik.touched.description &&
                  Boolean(formik.errors.description)
                }
                onChange={formik.handleChange}
                value={formik.values.description}
                helperText={
                  formik.touched.description && formik.errors.description
                }
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  type: "text",
                  rows: "3",
                }}
              />
            </GridItem>
            <Input
              type="file"
              inputRef={hiddenFileInput}
              inputProps={{ multiple: true }}
              onChange={(e) => {
                handleAddFile(e);
              }}
              className={classes.inputFile}
            />
            {files.map((item) => (
              <GridItem xs={12} className={classes.materialItem} key={item.id}>
                <SubmissionMaterial
                  name={item.file.file_name || item.file.name}
                  id={item.id}
                  handleDeleteFile={handleDeleteFile}
                />
              </GridItem>
            ))}
          </GridContainer>
        </DialogContent>
        <DialogActions
          className={classes.modalFooter + " " + classes.modalFooterActivity}
        >
          <div className={classes.modalFooterActivityLeft}>
            <Tooltip
              id="uploadfile-tooltip"
              title="Upload file"
              placement={"bottom"}
            >
              <IconButton size="small" color="inherit" onClick={handleClick}>
                <FileCopy />
              </IconButton>
            </Tooltip>
          </div>
          <div>
            <Button color="transparent" type="submit" simple>
              Submit
            </Button>
            <Button color="warning" type="reset" simple>
              Reset
            </Button>
          </div>
        </DialogActions>
      </form>
    </Dialog>
  );
}
///


export function ClassWorkFormDialog(props) {
  const classes = useStyles();
  const { classicModal, setClassicModal, myInitialValues } = props;

  const formik = useFormik({
    initialValues: myInitialValues,
    validationSchema: yup.object({
      title: yup.string().required("Title is required"),
      description: yup.string(),
      isAssignment: yup.boolean(),
      dueDate: yup.date().when("isAssignment", {
        is: true, // alternatively: (val) => val == true
        then: yup
          .date()
          .nullable()
          .min(new Date(), "Due date is in the past.")
          .required("Due date is required"),
        otherwise: yup
          .date()
          .nullable()
          .min(new Date(), "Due date is in the past."),
      }),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const myInitialFilesValue = myInitialValues.file.map(
    (ele) =>
      (ele = {
        file: ele,
        id: v4(),
      })
  );

  const [files, setFiles] = React.useState(myInitialFilesValue);
  const hiddenFileInput = React.useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleAddFile = (event) => {
    const newFiles = [...event.target.files].map(
      (ele) => (ele = { file: ele, id: v4() })
    );
    setFiles([...files, ...newFiles]);
  };

  const handleDeleteFile = (id) => {
    const newFilesList = files.filter((ele) => ele.id != id);
    setFiles(newFilesList);
  };

  const handleReset = () => {
    formik.handleReset();
    setFiles(myInitialFilesValue);
  };

  React.useEffect(() => {
    formik.setFieldValue("file", getFilesFromMyCustomList(files), false);
    return null;
  }, [files]);

  return (
    <Dialog
      classes={{
        root: classes.center,
        paper: classes.modal + " " + classes.myFormWidth,
      }}
      open={classicModal}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => setClassicModal(false)}
      aria-labelledby="classic-modal-slide-title"
      aria-describedby="classic-modal-slide-description"
    >
      <form onSubmit={formik.handleSubmit} onReset={handleReset}>
        <DialogTitle
          id="classic-modal-slide-title"
          disableTypography
          className={classes.modalHeader}
        >
          <IconButton
            className={classes.modalCloseButton}
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={() => setClassicModal(false)}
          >
            <Close className={classes.modalClose} />
          </IconButton>
          <h4 className={classes.modalTitle}>Class Activity</h4>
        </DialogTitle>
        <DialogContent
          id="classic-modal-slide-description"
          className={classes.modalBody}
        >
          <GridContainer>
            <GridItem>
              <CustomInput
                labelText="Your Title"
                id="title"
                name="title"
                error={formik.touched.title && Boolean(formik.errors.title)}
                onChange={formik.handleChange}
                value={formik.values.title}
                helperText={formik.touched.title && formik.errors.title}
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  type: "text",
                }}
              />
              <CustomInput
                labelText="Description"
                id="description"
                name="description"
                multiline
                error={
                  formik.touched.description &&
                  Boolean(formik.errors.description)
                }
                onChange={formik.handleChange}
                value={formik.values.description}
                helperText={
                  formik.touched.description && formik.errors.description
                }
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  type: "text",
                  rows: "3",
                }}
              />
            </GridItem>
            <GridItem xs={5}>
              <DateTimePicker
                id="dueDate"
                name="dueDate"
                label="Due date"
                clearable={true}
                formik={formik}
                className={{
                  root: classes.datepickerRoot,
                  MuiInputBaseRoot: classes.inputDatepicker,
                }}
              />
            </GridItem>
            <GridItem xs={5}>
              <div
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControl>
                  <FormControlLabel
                    control={
                      <Checkbox
                        id="isAssignment"
                        name="isAssignment"
                        onClick={formik.handleChange}
                        checked={formik.values.isAssignment}
                        checkedIcon={<Check className={classes.checkedIcon} />}
                        icon={<Check className={classes.uncheckedIcon} />}
                        classes={{
                          checked: classes.checked,
                          root: classes.checkRoot,
                        }}
                      />
                    }
                    classes={{ label: classes.label, root: classes.labelRoot }}
                    label="Assignment"
                  />
                </FormControl>
              </div>
            </GridItem>
            <Input
              type="file"
              inputRef={hiddenFileInput}
              inputProps={{ multiple: true }}
              onChange={(e) => {
                handleAddFile(e);
              }}
              className={classes.inputFile}
            />
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
        </DialogContent>
        <DialogActions
          className={classes.modalFooter + " " + classes.modalFooterActivity}
        >
          <div className={classes.modalFooterActivityLeft}>
            <Tooltip
              id="uploadfile-tooltip"
              title="Upload file"
              placement={"bottom"}
            >
              <IconButton size="small" color="inherit" onClick={handleClick}>
                <FileCopy />
              </IconButton>
            </Tooltip>
          </div>
          <div>
            <Button color="transparent" type="submit" simple>
              Submit
            </Button>
            <Button color="warning" type="reset" simple>
              Reset
            </Button>
          </div>
        </DialogActions>
      </form>
    </Dialog>
  );
}
