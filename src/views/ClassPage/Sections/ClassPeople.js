import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components

import styles from "assets/jss/material-kit-react/views/classSections/classActivityStyle.js";

import ClassPerson from "./ClassPerson";
import { usePromiseResult } from "use-promise-result";
import { getMemberInClass } from "services/classServices";

const useStyles = makeStyles(styles);

export default function ClassPeople(props) {
  const classes = useStyles();

  const { classID } = props;

  const { data, success } = usePromiseResult(() => getMemberInClass(classID));

  return success ? (
    <div className={classes.groupUser}>
      <div className={classes.groupTeachers}>
        <h2>Teachers</h2>
        <ClassPerson person={data["tutor"]} />
      </div>
      <div className={classes.groupStudents}>
        <h2>Classmates</h2>
        {data["students"].map((item) => (
          <ClassPerson person={item} key={item.id} />
        ))}
      </div>
    </div>
  ) : null;
}
