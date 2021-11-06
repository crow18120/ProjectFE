import axiosInstance from "./axios.js";

export const getAllActivity = async (idClass) => {
  return await axiosInstance
    .get(`activities/class/${idClass}/`)
    .then((response) => response.data);
};

export const getActivity = async (idActivity) => {
  return await axiosInstance
    .get(`activities/activity/${idActivity}/`)
    .then((response) => response.data);
};
