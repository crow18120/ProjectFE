import { Grid, TextField } from "@material-ui/core";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";


const validationSchema = yup.object({
  fullName: yup.string().required("Full name is required."),
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
  city: yup.string().required("City is required."),
  departmentID: yup.string().required("Department is required."),
  hireDate: yup
    .date("Hire date is required.")
    .required("Hire date is required."),
  isPermanent: yup.bool().oneOf([true], "Permanent is required."),
});

export function ProfileFrom(props) {
  const { setOpenPopup, setRecords, initialValues, setNotify } = props;

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // let message = "";
      // if (initialValues.id !== 0) {
      //   employeeService.updateEmployee(values);
      //   message = "Updated Successfully";
      // } else {
      //   employeeService.insertEmployee(values);
      //   message = "Submitted Successfully";
      // }
      // setOpenPopup(false);
      // setRecords(employeeService.getAllEmployees());
      // setNotify((currentNotify) => ({
      //   ...currentNotify,
      //   isOpen: true,
      //   message: message,
      //   type: "success",
      // }));
    },
  });

  return (
    <>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
          <CustomInput
            labelText="Username"
            id="username"
            name="username"
            error={formik.touched.username && Boolean(formik.errors.username)}
            onChange={formik.handleChange}
            value={formik.values.username}
            helperText={formik.touched.username && formik.errors.username}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: "text",
              endAdornment: (
                <InputAdornment position="end">
                  <Person className={classes.inputIconsColor} />
                </InputAdornment>
              ),
            }}
          />
          <CustomInput
            labelText="Password"
            id="password"
            name="password"
            error={formik.touched.password && Boolean(formik.errors.password)}
            onChange={formik.handleChange}
            value={formik.values.password}
            helperText={formik.touched.password && formik.errors.password}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: "password",
              endAdornment: (
                <InputAdornment position="end">
                  <Icon className={classes.inputIconsColor}>lock_outline</Icon>
                </InputAdornment>
              ),
              autoComplete: "off",
            }}
          />
        <CardFooter className={classes.cardFooter}>
          <Button simple color="primary" size="lg" type="submit">
            Sign in
          </Button>
        </CardFooter>
      </form>
      <Form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
        <Grid container>
          <Grid item xs={6}>
            <TextField label="First Name" name="fullName" formik={formik} />
            <TextField label="Telephone" name="phone" formik={formik} />
            <TextField label="Location" name="location" formik={formik} />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Last Name" name="lastName" />
            <Controls.Select
              name="departmentID"
              label="Department"
              formik={formik}
              options={employeeService.getDepartmentCollection()}
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                inputVariant="outlined"
                label="Date of Birth"
                format="MM/dd/yyyy"
                name={name}
                value={formik.values[name]}
                onChange={(value) => formik.setFieldValue(name, value)}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
                error={formik.touched[name] && Boolean(formik.errors[name])}
                helperText={formik.touched[name] && formik.errors[name]}
              />
            </MuiPickersUtilsProvider>
            <Controls.DatePicker
              name="hireDate"
              label="Hire Date"
              formik={formik}
            />
            <Controls.Checkbox
              name="isPermanent"
              label="Permanent Employee"
              formik={formik}
            />
            <div>
              <Controls.Button text="Submit" type="submit" />
              <Controls.Button text="Reset" type="reset" color="default" />
            </div>
          </Grid>
        </Grid>
      </Form>
    </>
  );
}
