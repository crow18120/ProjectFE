import { container } from "assets/jss/material-kit-react.js";

import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

const homePageStyle = {
  container: {
    ...container,
    zIndex: "10",
  },
  brand: {
    color: "#FFFFFF",
    textAlign: "left",
  },
  title: {
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    padding: "50px 30px 20px 30px",
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  ...imagesStyles,
  imgCardHead: {
    overflow: "hidden",
  },
  card: {
    "&:hover": {
      backgroundColor: "#f5f5f5",
      zIndex: "10",
    },
    transition: "0.5s ease",
  },
  cardHeader: {
    width: "auto",
    textAlign: "center",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "-40px",
    padding: "20px 0px 0px 0px",
    marginBottom: "0px",
  },
  cardBody: {
    borderBottom: "1px solid rgb(0 0 0 / 14%)",
  },
  cardFooter: {
    padding: "0rem",
    border: "0",
    borderRadius: "6px",
    justifyContent: "center !important",
  },
  myParallax: {
    height: "200px",
    overflow: "hidden",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    alignItems: "center",
  },
};

export default homePageStyle;
