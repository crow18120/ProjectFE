import React from "react";
import * as yup from "yup";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField, InputAdornment } from "@material-ui/core";
// @material-ui/icons

// core components
import styles from "assets/jss/material-kit-react/views/viewSubmissionSections/viewSubmissionStyle.js";

const useStyles = makeStyles(styles);

export default function GradedTab() {
  const classes = useStyles();

  const [mark, setMark] = React.useState("");
  const [message, setMessage] = React.useState("");
  //   const [valid, setValid] = React.useState(true);

  const schema = yup.object().shape({
    mark: yup
      .number()
      .typeError("Marks must be numeric.")
      .nullable()
      .min(0, "Minimum value is 0.")
      .max(100, "Maximum value is 100."),
  });
  const handleChange = (e) => {
    const value = e.currentTarget.value;
    setMark(value);
    setMessage("");
    schema.validate({ mark: value }).catch((err) => {
      setMessage(err.errors);
    });
  };

  return (
    <Grid container className={classes.subFileTab}>
      <Grid item xs={12} className={classes.subFileTabTitle}>
        <h4>Mark</h4>
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          inputProps={{
            style: { textAlign: "right" },
          }}
          value={mark}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <span>/100</span>
              </InputAdornment>
            ),
          }}
          helperText={message}
        />
      </Grid>
    </Grid>
  );
}
