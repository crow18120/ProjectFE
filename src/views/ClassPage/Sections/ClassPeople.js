import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components

import styles from "assets/jss/material-kit-react/views/classSections/classActivityStyle.js";

import ClassPerson from "./ClassPerson";

const useStyles = makeStyles(styles);

export default function ClassPeople() {
  const classes = useStyles();
  console.log(classes);
  return (
    <div className={classes.groupUser}>
      <div className={classes.groupTeachers}>
        <h2>Teachers</h2>
        <ClassPerson />
      </div>
      <div className={classes.groupStudents}>
        <h2>Classmates</h2>
        <ClassPerson />
        <ClassPerson />
      </div>
    </div>
  );
}
