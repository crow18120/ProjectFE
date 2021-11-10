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
import { usePromiseResult } from "use-promise-result";
import { getStudentWithActivity } from "services/activityServices";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles(styles);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 2.5 + ITEM_PADDING_TOP,
    },
  },
};

export default function StudentSubmit(props) {
  const classes = useStyles();

  const history = useHistory();

  const { classwork, status, activityID, student, error, handleSubmit } = props;

  const { data, success } = usePromiseResult(() =>
    getStudentWithActivity(activityID)
  );

  const [myOption, setMyOption] = React.useState([
    {
      id: "0",
      name: "Student name ...",
    },
  ]);

  const [myValue, setMyValue] = React.useState("0");

  React.useEffect(() => {
    student ? setMyValue(student.id) : null;
  }, [student]);

  React.useEffect(() => {
    success
      ? setMyOption(
          data.map((ele) => {
            return {
              id: ele.id,
              name: ele.first_name + " " + ele.last_name,
            };
          })
        )
      : null;
  }, [success]);

  const handleChange = (event) => {
    setMyValue(event.target.value);
    history.push(`/view-sub-page/${activityID}/${event.target.value}`);
    location.reload();
  };

  const handleClick = () => {
    handleSubmit();
  };

  return (
    <GridContainer className={classes.studentSubmitContent}>
      <GridItem xs={4} className={classes.titleSubmission}>
        <h3>{classwork}</h3>
      </GridItem>
      <GridItem xs={4}>
        <FormControl xs={8} className={classes.filterStudent}>
          <Select
            value={myValue}
            onChange={handleChange}
            displayEmpty
            inputProps={{
              "aria-label": "Without label",
            }}
            input={<OutlinedInput className={classes.filterOutline} />}
            MenuProps={MenuProps}
          >
            {myOption.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                <Link to={`/view-sub-page/${activityID}/${item.id}`}>
                  {item.name}
                </Link>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </GridItem>
      <GridItem xs={4} className={classes.gradedStudentSubmit}>
        {status == "Unmarked" ? (
          <p className={classes.statusStudentSubmit}>
            <Danger>Unmarked</Danger>
          </p>
        ) : (
          <p className={classes.statusStudentSubmit}>
            <Success>Marked</Success>
          </p>
        )}
        <p className={classes.statusStudentSubmit}>
          {error == "" ? (
            <Button color="primary" onClick={handleClick}>
              Submit
            </Button>
          ) : (
            <Button color="primary" disabled>
              Submit
            </Button>
          )}
        </p>
      </GridItem>
    </GridContainer>
  );
}
