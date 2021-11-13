import moment from "moment";
import axiosInstance from "./axios.js";
import { decodeJwtToken } from "./userServices.js";

export const getAllClass = async () => {
  const payload = decodeJwtToken();
  return await axiosInstance
    .get("classes/class-tutor/" + payload.account_id + "/")
    .then((response) => response.data);
};

export const getAllTutor = async () => {
  return await axiosInstance
    .get("users/tutor/")
    .then((response) => response.data);
};

export const addTutor = async (values) => {
  let formData = new FormData();
  values = {
    ...values,
    groups: 2,
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
  return await axiosInstance.put(`users/tutor/${user.data.id}/`, formData, {
    headers: {
      "Content-Type": `multipart/form-data boundary=${formData._boundary}`,
    },
    body: { formData },
  });
};

export const editTutor = async (values) => {
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
  return await axiosInstance.put(`users/tutor/${values["id"]}/`, formData, {
    headers: {
      "Content-Type": `multipart/form-data boundary=${formData._boundary}`,
    },
    body: { formData },
  });
};

export const deleteTutor = async (tutorID) => {
  return await axiosInstance.delete(`users/tutor/${tutorID}/`);
};
