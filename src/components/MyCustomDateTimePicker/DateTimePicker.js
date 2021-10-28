import React from "react";
import {
  KeyboardDateTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
export default function DatePicker(props) {
  const { name, label, formik, clearable } = props;
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDateTimePicker
        variant="dialog"
        ampm={false}
        label={label}
        name={name}
        clearable={clearable}
        value={formik.values[name]}
        disablePast
        onChange={(value) => formik.setFieldValue(name, value)}
        format="yyyy/MM/dd HH:mm"
        error={formik.touched[name] && Boolean(formik.errors[name])}
        helperText={formik.touched[name] && formik.errors[name]}
      />
    </MuiPickersUtilsProvider>
  );
}
