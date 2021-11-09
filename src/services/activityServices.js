import axiosInstance from "./axios.js";

export const getAllActivity = async (idClass) => {
  const class_obj = await axiosInstance
    .get(`classes/class/${idClass}/`)
    .then((response) => response.data);
  const activities = await axiosInstance
    .get(`activities/class/${idClass}/`)
    .then((response) => response.data);
  return { class: class_obj, activities: activities };
};

export const getActivity = async (idActivity) => {
  return await axiosInstance
    .get(`activities/activity/${idActivity}/`)
    .then((response) => response.data);
};

export const getAllSubmissionWithActivity = async (idActivity) => {
  return await axiosInstance
    .get(`activities/act-sub/${idActivity}/`)
    .then((response) => response.data);
};

export const getSubmissionWithActAndStu = async (act, stu) => {
  return await axiosInstance
    .get(`activities/submission/${act}/${stu}/`)
    .then((response) => response.data[0]);
};

export const getStudentWithActivity = async (activityID) => {
  return await axiosInstance
    .get(`users/stu-act/${activityID}/`)
    .then((response) => response.data)
    .then((data) => data.map((ele) => ele.student_detail));
};
