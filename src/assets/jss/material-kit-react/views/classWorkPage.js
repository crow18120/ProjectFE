import { container, title } from "assets/jss/material-kit-react.js";

const submissionPageStyle = {
  "@global": {
    body: { backgroundColor: "#EEEEEE" },
  },
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container,
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
      color: "#EEEEEE",
    },
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    minHeight: "90vh",
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  navWrapper: {
    margin: "20px auto 50px auto",
    textAlign: "center",
  },
  classParallax: {
    height: "240px",
  },
  infoSubmission: {
    margin: "1.875rem 0rem 1rem 0rem",
    textAlign: "left",
    color: "#000",
    borderBottom: "0.0625rem solid #dadce0",
    "& h2": {
      color: "#9c27b0",
      fontWeight: "400",
      borderBottom: "0.0625rem solid #9c27b0",
      position: "relative",
    },
  },
  btnSubmission: {
    position: "absolute",
    right: "0",
  },
  deadlineTimer: {
    color: "red",
  },
  deadlineTimerGreen: {
    color: "green",
  },
  materialContainer: {
    justifyContent: "space-between",
    paddingLeft: "1rem",
    width: "100%",
  },
  materialItem: {
    padding: "0.5rem 0.5rem",
    margin: "0",
  },
  dialogBack: {
    padding: "25px 50px",
  },
  bodyBack: {
    margin: "20px",
  },
};

export default submissionPageStyle;
