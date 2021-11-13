import { TextField } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    width: "80%",
  },
}));

export default function Input(props) {
  const { name, label, formik, ...other } = props;
  const classes = useStyles();
  return (
    <TextField
      variant="outlined"
      id={name}
      label={label}
      name={name}
      value={formik.values[name]}
      onChange={formik.handleChange}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && formik.errors[name]}
      {...other}
      classes={{ root: classes.root }}
    />
  );
}
