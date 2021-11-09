import React from "react";
import PdfViewer from "components/PDFViewer/PDFViewer";

import { Box, Typography } from "@material-ui/core";

import { baseURL } from "services/axios";

// import { usePromiseResult } from "use-promise-result";
// import { getFile } from "services/classServices.js";

export default function ViewSubFile(props) {
  const { isViewSubFile, file } = props;
  return typeof file != "string" ? (
    <PdfViewer
      file={file ? baseURL + file.file : ""}
      filename={file ? file.file_name : ""}
      isClose={false}
      isViewSubFile={isViewSubFile}
      onClose={() => {
        console.log("Close");
      }}
    />
  ) : (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        background: "rgb(238 238 238)",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <Typography variant="h4">No file attachment</Typography>
    </Box>
  );
}
