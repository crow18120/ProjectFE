import moment from "moment";
import axiosInstance from "./axios.js";
import { decodeJwtToken } from "./userServices.js";

export const getAllClass = async () => {
  const payload = decodeJwtToken();
  return await axiosInstance
    .get("classes/class-student/" + payload.account_id + "/")
    .then((response) => response.data)
    .then((data) => data.map((ele) => ele.class_obj));
};

export const getAllStudent = async () => {
  return await axiosInstance
    .get("users/student/")
    .then((response) => response.data);
};

export const addStudent = async (values) => {
  let formData = new FormData();
  values = {
    ...values,
    groups: 3,
    username: values["email"].slice(0, values["email"].indexOf("@")),
    password: "gch18120",
    DOB: moment(values["DOB"]).utc().format(),
  };
  for (const key in values) {
    if (Object.hasOwnProperty.call(values, key)) {
      const value = values[key];
      formData.append(key, value);
    }
  }
  let err = "";
  const user = await axiosInstance
    .post("users/account/", formData, {
      headers: {
        "Content-Type": `multipart/form-data boundary=${formData._boundary}`,
      },
      body: { formData },
    })
    .catch(function (error) {
      if (error.response) {
        err = error.response;
      } else if (error.request) {
        err = error.request;
      } else {
        err = error.message;
      }
    });
  if (err !== "") return err;
  return await axiosInstance.put(`users/student/${user.data.id}/`, formData, {
    headers: {
      "Content-Type": `multipart/form-data boundary=${formData._boundary}`,
    },
    body: { formData },
  });
};

export const editStudent = async (values) => {
  let formData = new FormData();
  values = {
    id: values["id"],
    first_name: values["first_name"],
    last_name: values["last_name"],
    mobile: values["mobile"],
    location: values["location"],
    DOB: moment(values["DOB"]).utc().format(),
  };
  for (const key in values) {
    if (Object.hasOwnProperty.call(values, key)) {
      const value = values[key];
      formData.append(key, value);
    }
  }
  return await axiosInstance.put(`users/student/${values["id"]}/`, formData, {
    headers: {
      "Content-Type": `multipart/form-data boundary=${formData._boundary}`,
    },
    body: { formData },
  });
};

export const deleteStudent = async (studentID) => {
  return await axiosInstance.delete(`users/student/${studentID}/`);
};
