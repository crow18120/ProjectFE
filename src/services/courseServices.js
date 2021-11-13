import axiosInstance from "./axios.js";

export const getAllCourse = async () => {
  return await axiosInstance
    .get("courses/course/")
    .then((response) => response.data);
};

export const addCourse = async (values) => {
  let formData = new FormData();
  for (const key in values) {
    if (key == "file" || key == "materials") continue;
    if (Object.hasOwnProperty.call(values, key)) {
      const value = values[key];
      formData.append(key, value);
    }
  }

  const course = await axiosInstance.post("courses/course/", formData, {
    headers: {
      "Content-Type": `multipart/form-data boundary=${formData._boundary}`,
    },
    body: { formData },
  });

  if (values["file"].length != 0) {
    let formData2 = new FormData();
    formData2.append("course", course.data["id"]);
    for (const file in values["file"]) {
      formData2.append("file", values["file"][file]);
    }

    return await axiosInstance.post("courses/material/", formData2, {
      headers: {
        "Content-Type": `multipart/form-data boundary=${formData2._boundary}`,
      },
      body: { formData2 },
    });
  } else return course;
};

export const editCourse = async (values) => {
  let formData = new FormData();
  for (const key in values) {
    if (key == "file" || key == "materials") continue;
    if (Object.hasOwnProperty.call(values, key)) {
      const value = values[key];
      formData.append(key, value);
    }
  }

  const course = await axiosInstance.put(
    `courses/course/${values["id"]}/`,
    formData,
    {
      headers: {
        "Content-Type": `multipart/form-data boundary=${formData._boundary}`,
      },
      body: { formData },
    }
  );
  const materials = course.data.materials.map((ele) => ele.id);
  const push_materials = values["file"].map((ele) => ele.id);
  const pop_materials = materials.filter(
    (ele) => !push_materials.includes(ele)
  );
  const new_materials = values["file"].filter((ele) => ele.id == undefined);
  pop_materials.map(
    async (ele) => await axiosInstance.delete(`courses/material/${ele}/`)
  );
  if (new_materials.length != 0) {
    formData.append("course", values["id"]);
    for (const file in new_materials) {
      formData.append("file", new_materials[file]);
    }

    return await axiosInstance.post("courses/material/", formData, {
      headers: {
        "Content-Type": `multipart/form-data boundary=${formData._boundary}`,
      },
      body: { formData },
    });
  } else return await axiosInstance.get(`courses/course/${values["id"]}/`);
};

export const deleteCourse = async (courseID) => {
  return await axiosInstance.delete(`courses/course/${courseID}/`);
};
