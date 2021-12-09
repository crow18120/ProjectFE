import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    width: "80%",
  },
}));

export default function Select(props) {
  const { name, label, options, formik, ...other } = props;
  const classes = useStyles();

  return (
    <FormControl
      variant="outlined"
      error={formik.touched[name] && Boolean(formik.errors[name])}
      classes={{ root: classes.root }}
      {...other}
    >
      <InputLabel>{label}</InputLabel>
      <MuiSelect
        label={label}
        name={name}
        value={formik.values[name]}
        onChange={formik.handleChange}
      >
        <MenuItem value="0">None</MenuItem>
        {options.map((item) => (
          <MenuItem key={item.key} value={item.key}>
            {item.title}
          </MenuItem>
        ))}
      </MuiSelect>
      {formik.touched[name] && Boolean(formik.errors[name]) && (
        <FormHelperText>
          {formik.touched[name] && formik.errors[name]}
        </FormHelperText>
      )}
    </FormControl>
  );
}
