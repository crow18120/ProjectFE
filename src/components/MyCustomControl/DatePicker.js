import React from "react";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    width: "80%",
  },
}));

export default function DatePicker(props) {
  const { name, label, formik } = props;
  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        inputVariant="outlined"
        label={label}
        format="MM/dd/yyyy"
        name={name}
        value={formik.values[name]}
        onChange={(value) => formik.setFieldValue(name, value)}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
        error={formik.touched[name] && Boolean(formik.errors[name])}
        helperText={formik.touched[name] && formik.errors[name]}
        className={classes.root}
      />
    </MuiPickersUtilsProvider>
  );
}
