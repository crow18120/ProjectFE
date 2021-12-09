import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  TableContainer,
} from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer";

import styles from "assets/jss/material-kit-react/views/classSections/classActivityStyle.js";
import Muted from "components/Typography/Muted";
import GridItem from "components/Grid/GridItem";
import { getStudentWithClass } from "services/classServices";
import { baseURL } from "services/axios";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const columns = [
  { id: "index", label: "No." },
  { id: "first_name", label: "First Name" },
  {
    id: "last_name",
    label: "Last Name",
  },
  {
    id: "profile_image",
    label: "Avatar",
  },
  {
    id: "email",
    label: "Email",
  },
  {
    id: "mobile",
    label: "Phone",
  },
];

export default function ViewClassDialog(props) {
  const classes = useStyles();

  const { classicModal, setClassicModal, myData } = props;
  const [students, setStudents] = React.useState([]);

  React.useEffect(async () => {
    if (myData.id) {
      const data = await getStudentWithClass(myData.id);
      setStudents(data);
    }
  }, [myData.id]);

  return (
    <Dialog
      classes={{
        root: classes.center,
        paper: classes.modal,
        paperScrollPaper: classes.abcd,
      }}
      open={classicModal}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => setClassicModal(false)}
      aria-labelledby="classic-modal-slide-title"
      aria-describedby="classic-modal-slide-description"
    >
      <DialogTitle
        id="classic-modal-slide-title"
        disableTypography
        className={classes.modalHeader}
      >
        <IconButton
          className={classes.modalCloseButton}
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={() => setClassicModal(false)}
        >
          <Close className={classes.modalClose} />
        </IconButton>
        <h4 className={classes.modalTitle}>Class Detail</h4>
      </DialogTitle>
      {myData.course_detail ? (
        <DialogContent
          id="classic-modal-slide-description"
          className={classes.modalBody + " " + classes.abcd_content}
        >
          <GridContainer>
            <GridItem xs={1}>
              <Muted>Course:</Muted>
            </GridItem>
            <GridItem xs={11}>{myData.course_detail.name}</GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={1}>
              <Muted>Class:</Muted>
            </GridItem>
            <GridItem xs={11}>{myData.name}</GridItem>
          </GridContainer>
          <GridContainer>
            <TableContainer style={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell colSpan={6} style={{ fontWeight: 500 }}>
                      Tutor
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    {columns.map((column) => {
                      const value = myData.tutor_detail[column.id];
                      if (!value) {
                        return <TableCell key={column.id}>0</TableCell>;
                      } else if (column.id == "profile_image") {
                        return (
                          <TableCell
                            key={column.id}
                            className={classes.avatarPerson_abcd}
                          >
                            <img
                              src={baseURL + value}
                              alt="..."
                              className={
                                classes.imgRoundedCircle +
                                " " +
                                classes.imgFluid
                              }
                            />
                          </TableCell>
                        );
                      }
                      return <TableCell key={column.id}>{value}</TableCell>;
                    })}
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={6} style={{ fontWeight: 500 }}>
                      Student
                    </TableCell>
                  </TableRow>
                  {students.length != 0 ? (
                    students.map((row, index) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
                          {columns.map((column) => {
                            const value = row[column.id];
                            if (!value) {
                              return (
                                <TableCell key={column.id}>
                                  {index + 1}
                                </TableCell>
                              );
                            } else if (column.id == "profile_image") {
                              return (
                                <TableCell
                                  key={column.id}
                                  className={classes.avatarPerson_abcd}
                                >
                                  <img
                                    src={baseURL + value}
                                    alt="..."
                                    className={
                                      classes.imgRoundedCircle +
                                      " " +
                                      classes.imgFluid
                                    }
                                  />
                                </TableCell>
                              );
                            }
                            return (
                              <TableCell key={column.id}>{value}</TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })
                  ) : (
                    <TableRow>
                      <TableCell align="center" colSpan={6}>
                        There is no students.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </GridContainer>
        </DialogContent>
      ) : null}
      <DialogActions className={classes.modalFooter}>
        <Button onClick={() => setClassicModal(false)} color="danger" simple>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
