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
