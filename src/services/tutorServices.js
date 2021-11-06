import axiosInstance from "./axios.js";
import { decodeJwtToken } from "./userServices.js";

export const getAllClass = async () => {
  const payload = decodeJwtToken();
  return await axiosInstance
    .get("classes/class-tutor/" + payload.account_id + "/")
    .then((response) => response.data);
};