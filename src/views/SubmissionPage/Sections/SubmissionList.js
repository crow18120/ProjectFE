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
// import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/submissionSections/submissionStyle.js";
import SubmissionDetail from "./SubmissionDetail";

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
];

export default function SubmissionList(props) {
  const classes = useStyles();

  const { submissionList } = props;

  const myList = submissionList.map(
    (ele) =>
      (ele = {
        ...ele,
        filter:
          ele.graded != -1
            ? "Marked"
            : ele.materials.length == 0
            ? "Assigned"
            : "Handed in",
      })
  );

  const [filter, setFilter] = React.useState(options[0].id);
  const [filterList, setFilterList] = React.useState(myList);

  const handleChange = (event) => {
    const value = event.target.value;
    setFilter(value);
    if (value === "0") {
      setFilterList([...myList]);
    } else if (value === "1") {
      setFilterList(myList.filter((ele) => ele.filter === "Assigned"));
    } else if (value === "2") {
      setFilterList(myList.filter((ele) => ele.filter === "Handed in"));
    } else {
      setFilterList(myList.filter((ele) => ele.filter === "Marked"));
    }
  };

  return (
    <GridContainer className={classes.infoContainer}>
      <GridItem xs={12}>
        <FormControl className={classes.filterSubmission}>
          <Select
            value={filter}
            onChange={handleChange}
            displayEmpty
            inputProps={{
              "aria-label": "Without label",
            }}
            input={<OutlinedInput className={classes.filterOutline} />}
          >
            {options.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {item.filter}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </GridItem>
      {filterList.map((ele) => (
        <GridItem className={classes.itemSubmission} key={ele.id}>
          <SubmissionDetail
            activityID={ele.activity}
            filter={ele.filter}
            student={ele.student_detail}
            file={ele.materials.length}
          />
        </GridItem>
      ))}
    </GridContainer>
  );
}
