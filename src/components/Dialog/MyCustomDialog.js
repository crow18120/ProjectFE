import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Slide from "@material-ui/core/Slide";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// import custome component
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CustomInput from "components/CustomInput/CustomInput";
import DatePicker from "components/MyCustomDateTimePicker/DatePicker";
// import validation yup, formik
import * as yup from "yup";
import { useFormik } from "formik";
// import styles
import styles from "assets/jss/material-kit-react/components/myCustomeDialog.js";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
Transition.displayName = "Transition";

const useStyles = makeStyles(styles);

const validationSchemaProUser = yup.object({});

export function ProfileUserFormDialog(props) {
  const classes = useStyles();
  const { classicModal, setClassicModal, myInitialValues } = props;

  const formik = useFormik({
    initialValues: myInitialValues,
    validationSchema: validationSchemaProUser,
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
