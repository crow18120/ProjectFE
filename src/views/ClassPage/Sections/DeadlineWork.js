import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
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
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import ClassMaterial from "./ClassMaterial";

import styles from "assets/jss/material-kit-react/views/classSections/classActivityStyle.js";
import { usePromiseResult } from "use-promise-result";
import { getCourseWithClass } from "services/classServices";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function DeadlineWork(props) {
  const classes = useStyles();
  const { classID } = props;

  const { data, success } = usePromiseResult(() => getCourseWithClass(classID));

  const [classicModal, setClassicModal] = React.useState(false);

  const handleClick = () => {
    setClassicModal(true);
  };

  return (
    <Card>
      <CardHeader
        color="primary"
        className={classes.cardHeader + " " + classes.cardHeaderDeadline}
      >
        <GridContainer className={classes.cardHeaderContainer}>
          <GridItem>
            <p className={classes.name}>{success ? data.name : "Course"}</p>
          </GridItem>
        </GridContainer>
      </CardHeader>
      <CardBody className={classes.cardBody + " " + classes.cardBodyDeadline}>
        {success ? <p>{data.description}</p> : null}
      </CardBody>
      <CardFooter
        className={classes.cardFooter + " " + classes.cardFooterDeadline}
      >
        <Button simple color="primary" size="sm" onClick={handleClick}>
          View detail
        </Button>
      </CardFooter>
      {success ? (
        <Dialog
          classes={{
            root: classes.center,
            paper: classes.modal,
            paperScrollPaper: classes.abc,
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
            <h4 className={classes.modalTitle}>{data.name}</h4>
          </DialogTitle>
          <DialogContent
            id="classic-modal-slide-description"
            className={classes.modalBody}
          >
            <p>{data.description}</p>
            <GridContainer
              justify={"center"}
              className={classes.materialContainer}
            >
              {data.materials.map((item) => (
                <GridItem
                  xs={12}
                  sm={6}
                  md={4}
                  className={classes.materialItem}
                  key={item.id}
                >
                  <ClassMaterial
                    name={item.file_name}
                    type={item.file_type}
                    linkMaterial={item.file}
                  />
                </GridItem>
              ))}
            </GridContainer>
          </DialogContent>
          <DialogActions className={classes.modalFooter}>
            <Button
              onClick={() => setClassicModal(false)}
              color="danger"
              simple
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      ) : null}
    </Card>
  );
}
