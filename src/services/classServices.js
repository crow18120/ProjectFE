import axios from "axios";
import axiosInstance from "./axios.js";
import { decodeJwtToken, getRole } from "./userServices.js";

const MockDataClassList = [
  {
    course: {
      id: "1",
      name: "Web Design & Development",
    },
    id: "1",
    name: "GCH0714",
  },
  {
    course: {
      id: "2",
      name: "Advance Programming",
    },
    id: "2",
    name: "GCH0715",
  },
  {
    course: {
      id: "1",
      name: "Web Design & Development",
    },
    id: "3",
    name: "GCH0715",
  },
  {
    course: {
      id: "3",
      name: "Internet of Things",
    },
    id: "4",
    name: "GCH0716",
  },
  {
    course: {
      id: "2",
      name: "Advance Programming",
    },
    id: "5",
    name: "GCH0717",
  },
  {
    course: {
      id: "1",
      name: "Web Design & Development",
    },
    id: "6",
    name: "GCH0718",
  },
];

export const getAllClass = async () => {
  const payload = decodeJwtToken();
  const role = getRole();
  switch (role) {
    case "student":
      return await axiosInstance
        .get("classes/class-student/" + payload.account_id + "/")
        .then((response) => response.data)
        .then((data) => data.map((ele) => ele.class_obj));
    case "tutor":
      return await axiosInstance
        .get("classes/class-tutor/" + payload.account_id + "/")
        .then((response) => response.data);
    case "staff":
      return "abc";
    case null:
      return MockDataClassList;
  }
  return await axiosInstance
    .get("classes/class-student/" + payload.account_id + "/")
    .then((response) => response.data)
    .then((data) => data.map((ele) => ele.class_obj));
};

export const addMaterialActivity = async (data) => {
  let fd = new FormData();

  data = {
    ...data,
    name: data["title"],
    activity: "ac4ca190-db50-4dfb-9add-529c8564f6ea",
  };
  for (const key in data) {
    if (key == "file") continue;
    if (Object.hasOwnProperty.call(data, key)) {
      const value = data[key];
      fd.append(key, value);
    }
  }
  for (const file in data["file"]) {
    fd.append("file", data["file"][file]);
  }
  return await axios.post("http://127.0.0.1:8000/activities/ac-material/", fd, {
    headers: {
      "Content-Type": `multipart/form-data boundary=${fd._boundary}`,
    },
    body: { fd },
  });
};

export const getFile = async (id) => {
  id = "6b08e7c8-c32c-4886-b01c-8be07dd0f8c5";
  return await axios
    .get("http://127.0.0.1:8000/activities/ac-material/" + id + "/", {})
    .then((res) => res);
};

// export const getStudent = async (id) => {
//   return await axios
//     .get(getStudentsEndPointTest, {
//       params: {
//         id,
//       },
//     })
//     .then((res) => res);
//   // .then((data) => {
//   //   return {
//   //     ...data,
//   //     img: getAvatarUrlFromFileName(data.img),
//   //     birthday: moment(data.birthday).format("YYYY-MM-DD"),
//   //     gender: String(data.gender),
//   //     dayAdmission: moment(data.dayAdmission).format("YYYY-MM-DD"),
//   //   };
//   // });
// };

// export const modifyStudentAction = async (initVal) => {
//   let fd = new FormData();

//   initVal = {
//     ...initVal,
//     gender: +initVal.gender,
//   };
//   for (let key in initVal) {
//     const value = initVal[key];
//     fd.append(key, value);
//   }
//   return await axios.post(modifyStudentEndPoint, fd, {
//     headers: {
//       "Content-Type": false,
//     },
//   });
// };
