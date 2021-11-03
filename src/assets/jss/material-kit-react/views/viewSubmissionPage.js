import { container, title } from "assets/jss/material-kit-react.js";

const viewSubmissionPageStyle = {
  "@global": {
    body: { backgroundColor: "#FFFFFF" },
  },
  viewSubPageContainer: {
    height: "100vh",
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
  materialContainer: {
    justifyContent: "space-between",
    margin: "0",
    width: "100%",
  },
  materialItem: {
    borderRadius: "0.5rem",
    margin: "0.5rem 0rem",
    padding: "0",
  },
};

export default viewSubmissionPageStyle;
