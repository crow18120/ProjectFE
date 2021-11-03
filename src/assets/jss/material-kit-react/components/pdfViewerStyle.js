import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  root: {
    width: "98vw",
    border: "1px solid blue",
    overflow: "scroll",
    backgroundColor: "fafafa",
  },
  scroll: {
    "&::-webkit-scrollbar": {
      // General scrollbar
      width: "10px",
      height: "10px",
    },
    "&::-webkit-scrollbar-button": {
      // Side buttons
      width: "0px",
      height: "0px",
    },
    "&::-webkit-scrollbar-thumb": {
      // Scrollbar slider
      background: "#999",
      borderRadius: "2px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      // Slider hover
      background: "#777",
    },
    "&::-webkit-scrollbar-thumb:active": {
      // Slider active
      background: "#555",
    },
    "&::-webkit-scrollbar-track": {
      // Scrollbar track
      background: "#ccc",
      borderRadius: "2px",
    },
    "&::-webkit-scrollbar-track:hover": {
      // Track hover
      background: "#ccc",
    },
    "&::-webkit-scrollbar-track:active": {
      // Track active
      background: "#ccc",
    },
    "&::-webkit-scrollbar-corner": {
      // Scrollbar corners where scrollbars meet
      background: "transparent",
    },
  },

  container: {
    width: "100%",
    height: "100vh",
    fontFamily: "Roboto",
    fontWeight: "200",
    background: "rgba(0, 0, 0, 0.7)",
    overflow: "hidden",
    position: "relative",
    display: "block",
    "& canvas": {
      boxShadow: "0 0 5px rgba(0, 0, 0, 0.7) !important",
      margin: "10px auto !important",
    },
  },

  containerSubFile: {
    height: "80vh",
  },

  containerFilename: {
    textAlign: "left",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    "@media(max-width: 959px)": {
      textAlign: "center",
    },
  },

  iconFilename: {
    position: "absolute",
    marginTop: "-3px",
  },

  containerNavigation: {
    justifyContent: "flex-end",

    "@media(max-width: 959px)": {
      justifyContent: "center",
    },
  },

  containerPagination: {
    textAlign: "center",
  },

  header: {
    width: "100%",
    position: "sticky",
    top: "0",
    zIndex: "1",
    background: "rgb(50, 54, 57)",
    boxShadow:
      "0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2)",
    color: "#fff",
    margin: "0",
    padding: "0px 15px",

    "& a": {
      textDecoration: "none !important",
    },

    "& button": {
      width: "25px",
      height: "25px",
      color: "#fff !important",
      margin: "0 5px",
      background: "transparent",
      boxShadow: "none",

      "&:hover": {
        background: "transparent !important",
        color: "#fff !important",
        boxShadow: "none",
      },

      "& .MuiIcon-root": {
        width: "20px !important",
      },
    },
  },

  title: {
    marginLeft: "35px",
  },

  content: {
    height: "100vh",
    overflow: "auto",
    marginTop: "-55px",
    paddingTop: "55px",
  },

  contentSubFile: {
    height: "80vh",
  },

  zoom: {
    right: "30px",
    bottom: "30px",
    position: "sticky",
    marginTop: "-150px",
    paddingRight: "30px",

    "& button": {
      width: "36px",
      height: "36px",
      marginBottom: "10px",
      background: "#fff",
      color: "rgb(97, 97, 97)",

      "&:hover": {
        width: "36px",
        height: "36px",
        marginBottom: "10px",
        background: "#fff",
        color: "rgb(97, 97, 97)",
      },

      "&:disable": {
        width: "36px",
        height: "36px",
        marginBottom: "10px",
      },
    },
  },
});
