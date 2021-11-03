import React from "react";
// import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import {
  FormControl,
  MenuItem,
  Select,
  OutlinedInput,
} from "@material-ui/core";
// @material-ui/icons
// import Close from "@material-ui/icons/Close";
// core components
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Danger from "components/Typography/Danger.js";
import Success from "components/Typography/Success";

import styles from "assets/jss/material-kit-react/views/viewSubmissionSections/viewSubmissionStyle.js";

const useStyles = makeStyles(styles);

const options = [
  {
    id: "0",
    filter: "All",
  },
  {
    id: "1",
    filter: "Assigned",
  },
  {
    id: "2",
    filter: "Handed in",
  },
  {
    id: "3",
    filter: "Marked",
  },
  {
    id: "4",
    filter: "All",
  },
  {
    id: "5",
    filter: "Assigned",
  },
  {
    id: "6",
    filter: "Handed in",
  },
  {
    id: "7",
    filter: "Marked",
  },
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 2.5 + ITEM_PADDING_TOP,
    },
  },
};

export default function StudentSubmit() {
  const classes = useStyles();

  return (
    <GridContainer className={classes.studentSubmitContent}>
      <GridItem xs={4} className={classes.titleSubmission}>
        <h3>
          Đây sẽ là tên tiêu đề. Đây sẽ là tên tiêu đề.Đây sẽ là tên tiêu đề.
        </h3>
      </GridItem>
      <GridItem xs={4}>
        <FormControl xs={8} className={classes.filterStudent}>
          <Select
            // value={filter}
            // onChange={handleChange}
            displayEmpty
            inputProps={{
              "aria-label": "Without label",
            }}
            input={<OutlinedInput className={classes.filterOutline} />}
            MenuProps={MenuProps}
          >
            {options.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {item.filter}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </GridItem>
      <GridItem xs={4} className={classes.gradedStudentSubmit}>
        <p className={classes.statusStudentSubmit}>
          <Danger>Unmarked</Danger>
        </p>
        <p className={classes.statusStudentSubmit}>
          <Success>Marked</Success>
        </p>
        <p className={classes.statusStudentSubmit}>
          <Button color="primary">Submit</Button>
        </p>
      </GridItem>
    </GridContainer>
  );
}
