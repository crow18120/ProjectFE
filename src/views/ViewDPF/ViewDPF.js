import React from "react";
import PdfViewer from "components/PDFViewer/PDFViewer";

export default function ViewPDF(props) {
  const { isViewSubFile, file, file_name, handleClose } = props;
  return (
    <PdfViewer
      file={file}
      filename={file_name}
      onClose={handleClose}
      isClose={true}
      isViewSubFile={isViewSubFile}
    />
  );
}
