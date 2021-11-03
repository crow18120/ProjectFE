import React from "react";
import PdfViewer from "components/PDFViewer/PDFViewer";
import { usePromiseResult } from "use-promise-result";
import { getFile } from "services/classServices.js";

export default function ViewSubFile(props) {
  const { success, data } = usePromiseResult(() => getFile());
  console.log(data);
  const { isViewSubFile } = props;
  return success ? (
    <PdfViewer
      file={
        "http://127.0.0.1:8000/materials/classes/GCH0714/Day%203%20-%20Homework/Sword_Art_Online_19_-_Moon_Cradle.pdf"
      }
      filename="Đây là tên file."
      onClose={() => console.log("OnClose")}
      isClose={false}
      isViewSubFile={isViewSubFile}
    />
  ) : (
    "Loading"
  );
}
