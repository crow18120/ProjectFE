import typographyStyle from "./typographyStyle";

const classActivityStyle = {
  ...typographyStyle,
  card: {
    padding: "0.5rem 0rem",
  },
  cardHeader: {
    width: "auto",
    padding: "0.5rem 2rem",
    margin: "0",
    background: "#ffffff",
    color: "#000",
    boxShadow: "none",
    textAlign: "left",
    "& img": {
      width: "40px",
      aspectRatio: "1",
      textAlign: "center",
    },
  },
  cardBody: {
    justifyContent: "left !important",
    padding: "0.5rem 2rem 0.5rem 2rem",
    margin: "0",
    textAlign: "left",
  },
  cardFooter: {
    padding: "0rem 2rem",
    margin: "0",
    border: "0",
    borderRadius: "6px",
    justifyContent: "left !important",
  },
  avatar: {
    width: "55px",
    paddingRight: "0px",
  },
  name: {
    fontSize: "0.875rem",
    fontWeight: "400",
    lineHeight: "1.25rem",
    color: "#3c4043",
    margin: "0",
  },
  timer: {
    fontSize: "0.75rem",
    fontWeight: "400",
    lineHeight: "1rem",
    color: "#5f6368",
    margin: "0",
  },
  cardHeaderContainer: {
    alignItems: "center",
  },
  materialContainer: {
    justifyContent: "space-between",
    paddingLeft: "1rem",
    width: "100%",
  },
  materialItem: {
    borderRadius: "0.5rem",
    border: "0.0625rem solid #dadce0",
    margin: "0.5rem 0rem",
  },
  iconFile: {
    width: "70px",
    padding: "0.5rem",
    display: "flex",
    alignItems: "center",
    borderRight: "0.0625rem solid #dadce0",
    justifyContent: "center",
  },
  infoFile: {
    textAlign: "left",
    padding: "0.5rem 1rem",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  nameFile: {
    fontSize: "1rem",
    fontWeight: "500",
    lineHeight: "1.5rem",
    color: "#3c4043",
    margin: "0",
  },
  typeFile: {
    fontSize: "0.875rem",
    fontWeight: "400",
    lineHeight: "1.25rem",
    color: "#5f6368",
    margin: "0",
  },
};

export default classActivityStyle;
