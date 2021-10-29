import typographyStyle from "../componentsSections/typographyStyle";

const classActivityStyle = {
  ...typographyStyle,
  card: {
    width: "250px",
    padding: "1rem",
    margin: "0",
    "& input": {
      display: "none",
    },
  },
  cardHeader: {
    width: "auto",
    padding: "0",
    margin: "0",
    paddingBottom: "0.25rem",
    background: "#ffffff",
    color: "#000",
    boxShadow: "none",
    textAlign: "left",
  },
  cardBody: {
    justifyContent: "left !important",
    padding: "0.25rem 0rem",
    margin: "0",
    textAlign: "left",
  },
  cardFooter: {
    padding: "0",
    margin: "0",
    paddingTop: "0.25rem",
    justifyContent: "left !important",
  },
  infoSubmission: {
    margin: "1.875rem 0rem 1rem 0rem",
    textAlign: "left",
    color: "#000",
    "& h2": {
      color: "#9c27b0",
      fontWeight: "400",
      borderBottom: "0.0625rem solid #9c27b0",
      position: "relative",
    },
  },
  infoContainer: {
    paddingLeft: "0rem",
    paddingRight: "0rem",
    justifyContent: "left",
    textAlign: "left",
  },
  infoStatus: {
    borderRight: "0.0625rem solid #dadce0",
    color: "#000",
    textAlign: "left",
    maxWidth: "150px",
    padding: "0rem 1rem",
    "& h2": {
      fontWeight: "400",
      margin: "0",
    },
  },
  filterSubmission: {
    width: "150px",
    textAlign: "left",
    margin: "2rem 0rem 1rem 0rem",
  },
  filterOutline: {
    "& div": {
      padding: "0.5rem 1rem",
    },
  },
  detailSubmission: {
    alignItems: "center",
    margin: "0",
  },
  infoPerson: {
    width: "fit-content",
    padding: "0",
    paddingRight: "1rem",
  },
  avatar: {
    width: "2rem",
    aspectRatio: "1",
  },
  namePerson: {
    color: "#000",
    margin: "0",
  },
  itemSubmission: {
    width: "fit-content",
    padding: "1rem",
  },
};

export default classActivityStyle;
