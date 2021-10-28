import axios from "axios";

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
