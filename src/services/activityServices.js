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

export const gradeSubmission = async (values, submissionID) => {
  let formData = new FormData();
  for (const key in values) {
    if (Object.hasOwnProperty.call(values, key)) {
      const value = values[key];
      formData.append(key, value);
    }
  }
  return await axiosInstance.put(
    `activities/submission/${submissionID}/`,
    formData,
    {
      headers: {
        "Content-Type": `multipart/form-data boundary=${formData._boundary}`,
      },
      body: { formData },
    }
  );
};

export const submitSubmission = async (values, submissionID) => {
  let formData = new FormData();

  const materials = await axiosInstance
    .get(`activities/submission/${submissionID}/`)
    .then((response) => response.data)
    .then((data) => data.materials);
  console.log(materials);
  const push_materials = values["file"].map((ele) => ele.id);
  console.log(push_materials);
  const pop_materials = materials
    .map((ele) => ele.id)
    .filter((ele) => !push_materials.includes(ele));
  console.log(pop_materials);
  const new_materials = values["file"].filter((ele) => ele.id == undefined);
  pop_materials.map(
    async (ele) => await axiosInstance.delete(`activities/su-material/${ele}/`)
  );
  if (new_materials.length != 0) {
    formData.append("submission", submissionID);
    for (const file in new_materials) {
      formData.append("file", new_materials[file]);
    }

    return await axiosInstance.post("activities/su-material/", formData, {
      headers: {
        "Content-Type": `multipart/form-data boundary=${formData._boundary}`,
      },
      body: { formData },
    });
  } else
    return await axiosInstance.get(`activities/submission/${submissionID}/`);
};
