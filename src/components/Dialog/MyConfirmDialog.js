import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import Button from "components/CustomButtons/Button.js";

const useStyles = makeStyles((theme) => ({
  dialog: {
    position: "absolute",
    top: theme.spacing(5),
    padding: theme.spacing(2),
    minWidth: "30vw",
  },
  dialogTitle: {
    textAlign: "center",
    paddingBottom: "0.5rem",
  },
  dialogContent: {
    textAlign: "left",
  },
  dialogAction: {
    marginTop: theme.spacing(3),
    justifyContent: "center",
  },
  titleIcon: {
    backgroundColor: "#ff3d5185",
    color: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: "#ff3d5185",
      cursor: "default",
    },
    "& .MuiSvgIcon-root": {
      fontSize: "8rem",
    },
  },
}));

export default function ConfirmDialog(props) {
  const { confirmDialog, setConfirmDialog } = props;
  const classes = useStyles();
  return (
    <Dialog open={confirmDialog.isOpen} classes={{ paper: classes.dialog }}>
      <DialogTitle className={classes.dialogTitle}>
        <Typography variant="h6">{confirmDialog.title}</Typography>
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <Typography variant="subtitle1">{confirmDialog.subTitle}</Typography>
        {confirmDialog.attachment.map((item, index) => (
          <Typography key={item.id} variant="subtitle2">
            {index + 1}. {item.file.name || item.file.file_name}
          </Typography>
        ))}
      </DialogContent>
      <DialogActions className={classes.dialogAction}>
        <Button
          size="sm"
          onClick={() => {
            setConfirmDialog({ ...confirmDialog, isOpen: false });
          }}
        >
          Cancel
        </Button>
        <Button size="sm" color="rose" onClick={confirmDialog.onConfirm}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}
