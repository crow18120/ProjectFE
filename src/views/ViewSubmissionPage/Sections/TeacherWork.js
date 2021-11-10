import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Box, Tabs, Tab } from "@material-ui/core";
// @material-ui/icons
import { ListAlt, BorderColor } from "@material-ui/icons";
// core components

import styles from "assets/jss/material-kit-react/views/viewSubmissionSections/viewSubmissionStyle.js";

import SubFileTab from "./SubFileTab";
import GradedTab from "./GradedTab";

const useStyles = makeStyles(styles);

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const classes = useStyles();
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      className={classes.tabPanel}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function TeacherWork(props) {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const {
    submission,
    setViewFile,
    graded,
    handleChangeGraded,
    error,
    handleChangeError,
  } = props;

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 224,
      }}
      className={classes.workContainer}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
        className={classes.btnTabs}
      >
        <Tab label={<ListAlt />} {...a11yProps(0)} className={classes.btnTab} />
        <Tab
          label={<BorderColor />}
          {...a11yProps(1)}
          className={classes.btnTab}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <SubFileTab submission={submission} setViewFile={setViewFile} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <GradedTab
          graded={graded}
          handleChangeGraded={handleChangeGraded}
          error={error}
          handleChangeError={handleChangeError}
        />
      </TabPanel>
    </Box>
  );
}
