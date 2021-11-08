import axios from "axios";
import moment from "moment";
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
      return [];
    case "admin":
      return [];
    case null:
      return MockDataClassList;
  }
  console.log(role);
};

export const addClassActivity = async (values, classID) => {
  let formData = new FormData();
  values = {
    ...values,
    name: values["title"],
    class_obj: classID,
  };
  for (const key in values) {
    if (key == "file") continue;
    if (Object.hasOwnProperty.call(values, key)) {
      const value = values[key];
      formData.append(key, value);
    }
  }

  const activity = await axiosInstance.post("activities/activity/", formData, {
    headers: {
      "Content-Type": `multipart/form-data boundary=${formData._boundary}`,
    },
    body: { formData },
  });

  if (values["file"].length != 0) {
    formData.append("activity", activity.data["id"]);
    for (const file in values["file"]) {
      formData.append("file", values["file"][file]);
    }

    return await axiosInstance.post("activities/ac-material/", formData, {
      headers: {
        "Content-Type": `multipart/form-data boundary=${formData._boundary}`,
      },
      body: { formData },
    });
  } else return activity;
};

export const editClassActivity = async (values, activityID) => {
  let formData = new FormData();
  values = {
    ...values,
    name: values["title"],
  };
  for (const key in values) {
    if (key == "file") continue;
    if (Object.hasOwnProperty.call(values, key)) {
      const value = values[key];
      formData.append(key, value);
    }
  }

  const activity = await axiosInstance.put(
    `activities/activity/${activityID}/`,
    formData,
    {
      headers: {
        "Content-Type": `multipart/form-data boundary=${formData._boundary}`,
      },
      body: { formData },
    }
  );
  const materials = activity.data.materials.map((ele) => ele.id);
  const push_materials = values["file"].map((ele) => ele.id);
  const pop_materials = materials.filter(
    (ele) => !push_materials.includes(ele)
  );
  const new_materials = values["file"].filter((ele) => ele.id == undefined);
  pop_materials.map(
    async (ele) => await axiosInstance.delete(`activities/ac-material/${ele}/`)
  );
  if (new_materials.length != 0) {
    formData.append("activity", activityID);
    for (const file in new_materials) {
      formData.append("file", new_materials[file]);
    }

    return await axiosInstance.post("activities/ac-material/", formData, {
      headers: {
        "Content-Type": `multipart/form-data boundary=${formData._boundary}`,
      },
      body: { formData },
    });
  } else return await axiosInstance.get(`activities/activity/${activityID}/`);
};

export const deleteClassActivity = async (activityID) => {
  return await axiosInstance.delete(`activities/activity/${activityID}/`);
};

export const addClassWork = async (values, classID) => {
  let formData = new FormData();
  values = {
    ...values,
    name: values["title"],
    class_obj: classID,
    is_submit: true,
    is_assignment: values["isAssignment"],
    deadline_date:
      values["dueDate"] == null ? "" : moment(values["dueDate"]).utc().format(),
  };
  for (const key in values) {
    if (key == "file") continue;
    if (Object.hasOwnProperty.call(values, key)) {
      const value = values[key];
      formData.append(key, value);
    }
  }

  const activity = await axiosInstance.post("activities/activity/", formData, {
    headers: {
      "Content-Type": `multipart/form-data boundary=${formData._boundary}`,
    },
    body: { formData },
  });

  if (values["file"].length != 0) {
    formData.append("activity", activity.data["id"]);
    for (const file in values["file"]) {
      formData.append("file", values["file"][file]);
    }

    return await axiosInstance.post("activities/ac-material/", formData, {
      headers: {
        "Content-Type": `multipart/form-data boundary=${formData._boundary}`,
      },
      body: { formData },
    });
  } else return activity;
};

export const editClassWork = async (values, activityID) => {
  let formData = new FormData();
  values = {
    ...values,
    name: values["title"],
    is_submit: true,
    is_assignment: values["isAssignment"],
    deadline_date:
      values["dueDate"] == null ? "" : moment(values["dueDate"]).utc().format(),
  };
  console.log(values);
  for (const key in values) {
    if (key == "file") continue;
    if (Object.hasOwnProperty.call(values, key)) {
      const value = values[key];
      formData.append(key, value);
    }
  }

  const activity = await axiosInstance.put(
    `activities/activity/${activityID}/`,
    formData,
    {
      headers: {
        "Content-Type": `multipart/form-data boundary=${formData._boundary}`,
      },
      body: { formData },
    }
  );
  const materials = activity.data.materials.map((ele) => ele.id);
  const push_materials = values["file"].map((ele) => ele.id);
  const pop_materials = materials.filter(
    (ele) => !push_materials.includes(ele)
  );
  const new_materials = values["file"].filter((ele) => ele.id == undefined);
  pop_materials.map(
    async (ele) => await axiosInstance.delete(`activities/ac-material/${ele}/`)
  );
  if (new_materials.length != 0) {
    formData.append("activity", activityID);
    for (const file in new_materials) {
      formData.append("file", new_materials[file]);
    }

    return await axiosInstance.post("activities/ac-material/", formData, {
      headers: {
        "Content-Type": `multipart/form-data boundary=${formData._boundary}`,
      },
      body: { formData },
    });
  } else return await axiosInstance.get(`activities/activity/${activityID}/`);
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
