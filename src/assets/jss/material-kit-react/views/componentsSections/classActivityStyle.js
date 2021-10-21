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
  },
  cardBody: {
    justifyContent: "left !important",
    padding: "0.5rem 2rem 0.25rem 2rem",
    margin: "0",
    textAlign: "left",
  },
  cardFooter: {
    padding: "0.25rem 2rem 0 2rem",
    margin: "0",
    border: "0",
    borderRadius: "6px",
    justifyContent: "left !important",
  },
  avatar: {
    width: "55px",
    paddingRight: "0px",
    "& img": {
      width: "40px",
      aspectRatio: "1",
      textAlign: "center",
    },
  },
  avatarPerson: {
    width: "48px",
    paddingRight: "0px",
    "& img": {
      width: "32px",
      aspectRatio: "1",
      textAlign: "center",
    },
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
  deadlineTimer: {
    color: "red",
  },
  cardClassWork: {
    "&:hover": {
      backgroundColor: "#f5f5f5",
      zIndex: "10",
    },
  },
  cardHeaderClassWork: {
    backgroundColor: "inherit",
  },
  cardBodyClassWork: {
    borderBottom: "0.0625rem solid #dadce0",
  },
  cardHeaderDeadline: {
    padding: "0.75rem 1rem 0.25rem 1rem",
    borderBottom: "0.0625rem solid #dadce0",
  },
  cardBodyDeadline: {
    padding: "0.25rem 1rem 0.25rem 1rem",
    borderBottom: "0.0625rem solid #dadce0",
  },
  cardFooterDeadline: {
    padding: "0.25rem 1rem 0.25rem 1rem",
    justifyContent: "right !important",
  },
  cardPerson: {
    width: "100%",
    marginLeft: "inherit",
    alignItems: "center",
    padding: "0.35rem 0rem 0.35rem 2rem",
    borderBottom: "0.0625rem solid #dadce0",
    "&:last-child": {
      border: "none",
    },
  },
  namePerson: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    marginLeft: "0.5rem",
    maxWidth: "30rem",
    letterSpacing: ".01785714em",
    fontSize: "0.875rem",
    fontWeight: "500",
    lineHeight: "1.25rem",
    color: "#3c4043",
    textAlign: "left",
    marginBottom: "0",
  },
  btnMail: {
    "& svg": {
      color: "#3c4043",
    },
  },
  groupUser: {
    margin: "30px 0px",
    color: "#9c27b0",
    textAlign: "left",
    "& h2": {
      fontWeight: "400",
      borderBottom: "0.0625rem solid #9c27b0",
    },
  },
  groupTeachers: {
    marginBottom: "50px",
  },
};

export default classActivityStyle;
