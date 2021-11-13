import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";
import React from "react";

export default function Select(props) {
  const { name, label, options, formik } = props;

  return (
    <FormControl
      variant="outlined"
      error={formik.touched[name] && Boolean(formik.errors[name])}
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
          <MenuItem key={item.id} value={item.id}>
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
