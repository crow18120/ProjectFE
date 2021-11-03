import typographyStyle from "../componentsSections/typographyStyle";

const viewSubmissionStyle = {
  ...typographyStyle,
  studentSubmitContent: {
    height: "10vh",
    boxShadow:
      "0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 3px 1px -2px rgb(0 0 0 / 12%), 0px 1px 5px 0px rgb(0 0 0 / 20%)",
    margin: "0",
    alignItems: "center",
    position: "relative",
    minHeight: "75px",
  },
  titleSubmission: {
    "& h3": {
      margin: "0",
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap",
    },
  },
  filterStudent: {
    width: "80%",
    textAlign: "left",
  },
  filterOutline: {
    "& div": {
      padding: "0.5rem 1rem",
    },
  },
  gradedStudentSubmit: {
    textAlign: "right",
  },
  statusStudentSubmit: {
    display: "inline-block",
    margin: "0rem 0.5rem",
  },
  workContainer: {
    height: "80vh",
  },
  btnTabs: {
    borderRight: "1px solid rgba(0, 0, 0, 0.12)",
    paddingTop: "0.5rem",
  },
  btnTab: {
    width: "55px",
    minWidth: "55px",
  },
  tabPanel: {
    height: "80vh",
    overflowY: "auto",
    width: "245px",
  },
  subFileTab: { padding: "1rem" },
  subFileTabTitle: {
    "& h4": {
      marginTop: "0",
    },
  },
  itemFile: {
    borderRadius: "0.5rem",
    border: "0.0625rem solid #dadce0",
    margin: "0.5rem 0rem",
  },
  iconFile: {
    padding: "0.5rem",
    display: "flex",
    alignItems: "center",
    borderRight: "0.0625rem solid #dadce0",
    justifyContent: "center",
  },
  infoFile: {
    textAlign: "left",
    padding: "0.5rem 1rem",
  },
  nameFile: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    fontSize: "1rem",
    fontWeight: "500",
    lineHeight: "1.5rem",
    color: "#3c4043",
    margin: "0",
  },
};

export default viewSubmissionStyle;
