import axiosInstance from "./axios.js";

export const loginService = async (data) => {
  let formData = new FormData();
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      const value = data[key];
      formData.append(key, value);
    }
  }
  return await axiosInstance
    .post("api/token/", formData)
    .then((res) => {
      localStorage.setItem("access_token", res.data.access);
      localStorage.setItem("refresh_token", res.data.refresh);
      axiosInstance.defaults.headers["Authorization"] =
        "JWT " + localStorage.getItem("access_token");
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};

export const logoutService = async () => {
  await axiosInstance.post("users/signout/blacklist/", {
    refresh_token: localStorage.getItem("refresh_token"),
  });
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  axiosInstance.defaults.headers["Authorization"] = null;
  return;
};
