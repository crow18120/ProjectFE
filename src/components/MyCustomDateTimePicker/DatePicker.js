import React from "react";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
export default function DatePicker(props) {
  const { name, label, formik } = props;

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        label={label}
        format="yyyy/MM/dd"
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
  );
}
