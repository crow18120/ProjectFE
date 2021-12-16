import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  TableContainer,
} from "@material-ui/core";
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
import { FormHelperText } from "@material-ui/core";
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
import Controls from "components/MyCustomControl/Controls";
// import validation yup, formik
import * as yup from "yup";
import { useFormik } from "formik";
// import styles
import styles from "assets/jss/material-kit-react/components/myCustomeDialog.js";
import { v4 } from "uuid";

import {
  addClassActivity,
  editClassActivity,
  addClassWork,
  editClassWork,
} from "services/classServices";
import {
  editStudent,
  addStudent,
  getAllStudent,
} from "services/studentServices";
import { editTutor, addTutor, getAllTutor } from "services/tutorServices";
import { addCourse } from "services/courseServices";
import { editCourse } from "services/courseServices";
import { getAllCourse } from "services/courseServices";
import { getStudentWithClass } from "services/classServices";
import { addClass } from "services/classServices";
import { getAllClass } from "services/classServices";
import { editClass } from "services/classServices";

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
              inputProps={{ multiple: true, accept: "application/pdf" }}
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

///
export function ClassWorkFormDialog(props) {
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
    enableReinitialize: true,
    onSubmit: async (values) => {
      if (!isEdit) {
        const result = await addClassWork(values, classOrActivityID);
        if (result.status == 201) {
          setClassicModal(false);
          setNotify({
            isOpen: true,
            message: "Add classwork successfully.",
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
        const result = await editClassWork(values, classOrActivityID);
        if (result.status == 201 || result.status == 200) {
          setClassicModal(false);
          setNotify({
            isOpen: true,
            message: "Edit classwork successfully.",
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

  const [files, setFiles] = React.useState(
    myInitialValues.file.map(
      (ele) =>
        (ele = {
          file: ele,
          id: v4(),
        })
    )
  );
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
    setFiles(
      myInitialValues.file.map(
        (ele) =>
          (ele = {
            file: ele,
            id: v4(),
          })
      )
    );
  };

  React.useEffect(() => {
    formik.setFieldValue("file", getFilesFromMyCustomList(files), false);
    return null;
  }, [files]);

  React.useEffect(() => {
    setFiles(
      myInitialValues.file.map(
        (ele) =>
          (ele = {
            file: ele,
            id: v4(),
          })
      )
    );
    return null;
  }, [myInitialValues]);

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
          <h4 className={classes.modalTitle}>Class Work</h4>
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
              inputProps={{ multiple: true, accept: "application/pdf" }}
              onChange={(e) => {
                handleAddFile(e);
              }}
              className={classes.inputFile}
            />
            {files.map((item) => (
              <GridItem xs={12} className={classes.materialItem} key={item.id}>
                <SubmissionMaterial
                  name={item.file.name || item.file.file_name}
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

///
export function UserFormDialog(props) {
  const classes = useStyles();
  const {
    classicModal,
    setClassicModal,
    myInitialValues,
    setNotify,
    index,
    role,
    setData,
  } = props;

  for (const key in myInitialValues) {
    if (key == "DOB") continue;
    if (myInitialValues[key] == null) {
      myInitialValues[key] = "";
    }
  }

  const formik = useFormik({
    initialValues: myInitialValues,
    validationSchema: yup.object({
      first_name: yup.string().required("First name is required."),
      last_name: yup.string().required("Last name is required."),
      email: yup
        .string()
        .email("Enter a valid email.")
        .required("Email is required."),
      mobile: yup
        .string()
        .required("Phone is required.")
        .max(10, "Must be 10 numbers.")
        .min(10, "Must be 10 numbers.")
        .matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          "Enter a valid phone."
        ),
      location: yup.string().required("Location is required."),
      DOB: yup
        .date("Date of birth is required.")
        .required("Date of birth is required."),
      interest: yup.string().required("Interest is required."),
    }),
    enableReinitialize: true,
    onSubmit: async (values) => {
      if (role == "Student") {
        if (index == -1) {
          const result = await addStudent(values);
          if (result.status == 200) {
            setClassicModal(false);
            setNotify({
              isOpen: true,
              message: "Add student successfully.",
              type: "success",
            });
            const data = await getAllStudent();
            setData(data);
          } else if (result.status == 400) {
            setNotify({
              isOpen: true,
              message: "Email is already exist.",
              type: "error",
            });
          }
        } else {
          const result = await editStudent(values);
          if (result.status == 200) {
            setClassicModal(false);
            setNotify({
              isOpen: true,
              message: "Edit student successfully.",
              type: "success",
            });
            const data = await getAllStudent();
            setData(data);
          } else {
            setNotify({
              isOpen: true,
              message: "Something error...",
              type: "error",
            });
          }
        }
      } else if (role == "Tutor") {
        if (index == -1) {
          const result = await addTutor(values);
          if (result.status == 200) {
            setClassicModal(false);
            setNotify({
              isOpen: true,
              message: "Add student successfully.",
              type: "success",
            });
            const data = await getAllTutor();
            setData(data);
            formik.handleReset();
          } else if (result.status == 400) {
            setNotify({
              isOpen: true,
              message: "Email is already exist.",
              type: "error",
            });
          }
        } else {
          const result = await editTutor(values);
          if (result.status == 200) {
            setClassicModal(false);
            setNotify({
              isOpen: true,
              message: "Edit student successfully.",
              type: "success",
            });
            const data = await getAllTutor();
            setData(data);
            formik.handleReset();
          } else {
            setNotify({
              isOpen: true,
              message: "Something error...",
              type: "error",
            });
          }
        }
      }
    },
  });

  return (
    <Dialog
      classes={{
        root: classes.center,
        paper: classes.modal + " " + classes.myFormAdminWidth,
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
          <h4 className={classes.modalTitle}>
            {index == -1 ? "Add" : "Edit"} {role}
          </h4>
        </DialogTitle>
        <DialogContent
          id="classic-modal-slide-description"
          className={classes.modalBody}
        >
          <GridContainer>
            <GridItem xs={6}>
              <Controls.Input
                label="First Name"
                name="first_name"
                formik={formik}
              />
              {index == -1 ? (
                <Controls.Input label="Email" name="email" formik={formik} />
              ) : (
                <Controls.Input
                  label="Email"
                  name="email"
                  formik={formik}
                  disabled
                />
              )}
              <Controls.Input
                label="Location"
                name="location"
                formik={formik}
              />
              <Controls.Input
                label="Interest"
                name="interest"
                formik={formik}
              />
            </GridItem>
            <GridItem xs={6}>
              <Controls.Input
                label="Last Name"
                name="last_name"
                formik={formik}
              />
              <Controls.Input label="Mobile" name="mobile" formik={formik} />
              <Controls.DatePicker
                name="DOB"
                label="Date of Birth"
                formik={formik}
              />
            </GridItem>
          </GridContainer>
        </DialogContent>
        <DialogActions className={classes.modalFooter}>
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

///
export function CourseFormDialog(props) {
  const classes = useStyles();
  const {
    classicModal,
    setClassicModal,
    myInitialValues,
    setNotify,
    index,
    setData,
  } = props;

  const formik = useFormik({
    initialValues: myInitialValues,
    validationSchema: yup.object({
      name: yup.string().required("Title is required"),
      credits: yup
        .number()
        .required("Credits is required.")
        .min(1, "More than 1"),
      file: yup
        .array()
        .required("Not null")
        .min(1, "Course must have at least one materials."),
    }),
    enableReinitialize: true,
    onSubmit: async (values) => {
      if (index == -1) {
        const result = await addCourse(values);
        if (result.status == 201) {
          const data = await getAllCourse();
          setData(data);
          setClassicModal(false);
          setNotify({
            isOpen: true,
            message: "Add course successfully.",
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
        const result = await editCourse(values);
        if (result.status == 201 || result.status == 200) {
          const data = await getAllCourse();
          setData(data);
          setClassicModal(false);
          setNotify({
            isOpen: true,
            message: "Edit course successfully.",
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

  React.useEffect(() => {
    setFiles(
      myInitialValues.file.map(
        (ele) =>
          (ele = {
            file: ele,
            id: v4(),
          })
      )
    );
    return null;
  }, [myInitialValues]);

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
          <h4 className={classes.modalTitle}>Course</h4>
        </DialogTitle>
        <DialogContent
          id="classic-modal-slide-description"
          className={classes.modalBody}
        >
          <GridContainer>
            <GridItem xs={9}>
              <CustomInput
                labelText="Course name"
                id="name"
                name="name"
                error={formik.touched.name && Boolean(formik.errors.name)}
                onChange={formik.handleChange}
                value={formik.values.name}
                helperText={formik.touched.name && formik.errors.name}
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  type: "text",
                }}
              />
            </GridItem>
            <GridItem xs={3}>
              <CustomInput
                labelText="Credits"
                id="credits"
                name="credits"
                error={formik.touched.credits && Boolean(formik.errors.credits)}
                onChange={formik.handleChange}
                value={formik.values.credits}
                helperText={formik.touched.credits && formik.errors.credits}
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
              inputProps={{ multiple: true, accept: "application/pdf" }}
              onChange={(e) => {
                handleAddFile(e);
              }}
              className={classes.inputFile}
            />
            {formik.touched.file && formik.errors.file && (
              <GridItem>
                <FormHelperText style={{ color: "red" }}>
                  {formik.touched.file && formik.errors.file}
                </FormHelperText>
              </GridItem>
            )}
            {files.map((item) => (
              <GridItem
                xs={12}
                sm={6}
                md={4}
                className={
                  classes.materialItem + " " + classes.materialItemCourses
                }
                key={item.id}
              >
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

export function ClassFormDialog(props) {
  const classes = useStyles();
  const {
    classicModal,
    setClassicModal,
    myInitialValues,
    setNotify,
    index,
    setData,
  } = props;

  const [allStudents, setAllStudents] = React.useState([]);
  const [allTutors, setAllTutors] = React.useState([]);
  const [allCourses, setAllCourses] = React.useState([]);
  const [currentStudents, setCurrentStudents] = React.useState([]);

  React.useEffect(async () => {
    const data1 = await getAllStudent();
    setAllStudents(
      data1.map(
        (ele) =>
          (ele = {
            key: ele.id,
            id: ele.id,
            first_name: ele.first_name,
            last_name: ele.last_name,
            email: ele.email,
          })
      )
    );
    const data2 = await getAllTutor();
    setAllTutors(
      data2.map(
        (ele) =>
          (ele = {
            title: ele.first_name + " " + ele.last_name + " - " + ele.email,
            key: ele.id,
          })
      )
    );
    const data3 = await getAllCourse();
    setAllCourses(data3.map((ele) => (ele = { title: ele.name, key: ele.id })));
  }, []);

  React.useEffect(async () => {
    if (myInitialValues.id) {
      const data4 = await getStudentWithClass(myInitialValues.id);
      setCurrentStudents(data4.map((ele) => ele.id));
    } else {
      setCurrentStudents([]);
    }
  }, [myInitialValues.id]);

  const [students, setStudents] = React.useState([]);

  React.useEffect(() => {
    setStudents(currentStudents);
  }, [currentStudents]);

  React.useEffect(() => {
    formik.setFieldValue("students", students, false);
  }, [students]);

  const columns = [
    { id: "index", label: "No." },
    { id: "name", label: "Name" },
    {
      id: "email",
      label: "Email",
    },
  ];
  console.log(index);
  const formik = useFormik({
    initialValues: myInitialValues,
    validationSchema: yup.object({
      name: yup.string().required("Class name is required."),
      course: yup
        .string()
        .required("Course is required")
        .min(2, "Course is required"),
      tutor: yup
        .string()
        .required("Tutor is required")
        .min(2, "Course is required"),
    }),
    enableReinitialize: true,
    onSubmit: async (values) => {
      if (index == -1) {
        const result = await addClass(values);
        if (result.status == 201) {
          setClassicModal(false);
          setNotify({
            isOpen: true,
            message: "Add class successfully.",
            type: "success",
          });
          const data = await getAllClass();
          setData(data);
        } else {
          setNotify({
            isOpen: true,
            message: "Something error...",
            type: "error",
          });
        }
      } else {
        await editClass(values);
        setClassicModal(false);
        setNotify({
          isOpen: true,
          message: "Edit class successfully.",
          type: "success",
        });
        const data = await getAllClass();
        setData(data);
      }
    },
  });

  const handleReset = () => {
    formik.handleReset();
    setStudents(currentStudents);
  };

  return (
    <Dialog
      classes={{
        root: classes.center,
        paper: classes.modal + " " + classes.myFormAdminWidth,
        paperScrollPaper: classes.abcd,
      }}
      open={classicModal}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => {
        setClassicModal(false);
        handleReset();
      }}
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
          <h4 className={classes.modalTitle}>
            {index == -1 ? "Add Class" : "Edit Class"}
          </h4>
        </DialogTitle>
        <DialogContent
          id="classic-modal-slide-description"
          className={classes.modalBody + " " + classes.abcd_content}
        >
          <GridContainer>
            <GridItem xs={6}>
              {index == -1 ? (
                <Controls.Input
                  label="Class Name"
                  name="name"
                  formik={formik}
                />
              ) : (
                <Controls.Input
                  label="Class Name"
                  name="name"
                  formik={formik}
                  disabled
                />
              )}
            </GridItem>
            <GridItem xs={6}>
              {index == -1 ? (
                <Controls.Select
                  label="Course"
                  name="course"
                  formik={formik}
                  options={allCourses}
                />
              ) : (
                <Controls.Select
                  label="Course"
                  name="course"
                  formik={formik}
                  options={allCourses}
                  disabled
                />
              )}
            </GridItem>
            <GridItem xs={6}>
              {index == -1 ? (
                <Controls.Select
                  label="Tutor"
                  name="tutor"
                  formik={formik}
                  options={allTutors}
                />
              ) : (
                <Controls.Select
                  label="Tutor"
                  name="tutor"
                  formik={formik}
                  options={allTutors}
                  disabled
                />
              )}
            </GridItem>
            <GridItem xs={12}>
              <TableContainer style={{ maxHeight: 340 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {allStudents.length != 0 ? (
                      allStudents.map((row, index) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.code}
                          >
                            {columns.map((column) => {
                              const value = row[column.id];
                              if (column.id == "index") {
                                return (
                                  <TableCell key={column.id}>
                                    {index + 1}
                                  </TableCell>
                                );
                              } else if (column.id == "name") {
                                return (
                                  <TableCell key={column.id}>
                                    {row["first_name"] + " " + row["last_name"]}
                                  </TableCell>
                                );
                              }
                              return (
                                <TableCell key={column.id}>{value}</TableCell>
                              );
                            })}
                            <TableCell key={index + " " + 1}>
                              <Checkbox
                                checked={
                                  students ? students.includes(row.id) : false
                                }
                                onClick={(e) => {
                                  const value = e.target.checked;
                                  if (value) {
                                    setStudents((students) => {
                                      return [...students, row.id];
                                    });
                                  } else {
                                    setStudents(
                                      students.filter((ele) => ele !== row.id)
                                    );
                                  }
                                }}
                              ></Checkbox>
                            </TableCell>
                          </TableRow>
                        );
                      })
                    ) : (
                      <TableRow></TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </GridItem>
          </GridContainer>
        </DialogContent>
        <DialogActions className={classes.modalFooter}>
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
