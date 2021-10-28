import typographyStyle from "../componentsSections/typographyStyle";

const submissionStyle = {
  ...typographyStyle,
  card: {
    padding: "0.5rem 0rem",
    "& input": {
      display: "none",
    },
  },
  cardHeader: {
    width: "auto",
    padding: "0.5rem 1rem",
    margin: "0",
    background: "#ffffff",
    color: "#000",
    boxShadow: "none",
    textAlign: "left",
    borderBottom: "0.0625rem solid #dadce0",
    "& h4": {
      margin: "0px",
    },
  },
  cardBody: {
    justifyContent: "left !important",
    padding: "0.25rem 1rem 0.25rem 1rem",
    margin: "0",
    textAlign: "left",
    borderBottom: "0.0625rem solid #dadce0",
  },
  cardFooter: {
    padding: "0.25rem 1rem 0 1rem",
    margin: "0",
    border: "0",
    borderRadius: "6px",
    justifyContent: "left !important",
  },
  linkView: {
    width: "100%",
  },
  btnSubmit: {
    width: "100%",
  },
  inputFile: {
    position: "absolute",
  },
  materialContainer: {
    justifyContent: "space-between",
    margin: "0",
    width: "100%",
  },
  materialItem: {
    borderRadius: "0.5rem",
    border: "0.0625rem solid #dadce0",
    margin: "0.5rem 0rem",
    padding: "0",
  },
  eleKey: {
    "& button": {
      position: "absolute",
    },
  },
  itemFile: {
    margin: "0",
    borderRadius: "0.5rem",
    border: "0.0625rem solid #dadce0",
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
  typeFile: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    fontSize: "0.875rem",
    fontWeight: "400",
    lineHeight: "1.25rem",
    color: "#5f6368",
    margin: "0",
  },
  btnFile: {
    padding: "0.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  MuiIconButtonRoot: {
    padding: "0",
  },
  infoContainer: {
    paddingLeft: "0rem",
    paddingRight: "0rem",
  },
  infoStatus: {
    borderRight: "0.0625rem solid #dadce0",
    padding: "0rem 0.5rem",
    "&:first-child": {
      padding: "0rem 0.5rem 0rem 1rem",
    },
    "&:last-child": {
      padding: "0rem 1rem 0rem 0.5rem",
      border: "none",
    },
    "& h2": {
      fontWeight: "400",
      margin: "0",
    },
  },
};

export default submissionStyle;
