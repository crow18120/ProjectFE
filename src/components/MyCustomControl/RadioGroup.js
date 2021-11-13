import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup as MuiRadioGroup,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import FiberManualRecord from "@material-ui/icons/FiberManualRecord";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

const useStyle = makeStyles((theme) => ({
  myCustomRoot: {
    padding: theme.spacing(0),
  },
  root: {
    margin: theme.spacing(1),
  },
}));

export default function RadioGroup(props) {
  const classes = useStyles();
  const classes_2 = useStyle();

  const { name, label, items, formik } = props;
  return (
    <FormControl classes={{ root: classes_2.root }}>
      <FormLabel>{label}</FormLabel>
      <MuiRadioGroup
        row
        name={name}
        value={formik.values[name]}
        onChange={formik.handleChange}
      >
        {items.map((item) => (
          <FormControlLabel
            key={item.id}
            value={item.id}
            control={
              <Radio
                icon={<FiberManualRecord className={classes.radioUnchecked} />}
                checkedIcon={
                  <FiberManualRecord className={classes.radioChecked} />
                }
                classes={{
                  checked: classes.radio,
                  root: classes.radioRoot,
                }}
              />
            }
            classes={{
              checked: classes.radio,
              root: classes.radioRoot + " " + classes_2.myCustomRoot,
            }}
            label={item.title}
          />
        ))}
      </MuiRadioGroup>
    </FormControl>
  );
}
