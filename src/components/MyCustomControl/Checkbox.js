import {
  FormControl,
  FormControlLabel,
  Checkbox as MuiCheckbox,
  FormHelperText,
  makeStyles,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormHelperText-root": {
      marginLeft: theme.spacing(1.5),
    },
  },
}));

export default function Checkbox(props) {
  const { name, label, formik } = props;
  const classes = useStyles();

  return (
    <FormControl
      error={formik.touched[name] && Boolean(formik.errors[name])}
      className={classes.root}
    >
      <FormControlLabel
        control={
          <MuiCheckbox
            checked={formik.values[name]}
            color="primary"
            name={name}
            onChange={formik.handleChange}
          />
        }
        label={label}
      />
      {formik.touched[name] && formik.errors[name] && (
        <FormHelperText>
          {formik.touched[name] && formik.errors[name]}
        </FormHelperText>
      )}
    </FormControl>
  );
}
