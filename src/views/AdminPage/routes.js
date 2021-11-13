/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import { Person, PersonOutline, Work, HomeWork } from "@material-ui/icons";
// core components/views for Admin layout
import TableList from "./Sections/TableList.js";
import StudentList from "./Sections/StudentList.js";
import TutorList from "./Sections/TutorList";
import CourseList from "./Sections/CourseList.js";
import ClassList from "./Sections/ClassList.js";
// core components/views for RTL layout

const dashboardRoutes = [
  {
    path: "/student",
    name: "Student List",
    icon: Person,
    component: StudentList,
    layout: "/admin",
  },
  {
    path: "/tutor",
    name: "Tutor List",
    icon: PersonOutline,
    component: TutorList,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Table List",
    icon: "content_paste",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/course",
    name: "Course List",
    icon: Work,
    component: CourseList,
    layout: "/admin",
  },
  {
    path: "/class",
    name: "Class List",
    icon: HomeWork,
    component: ClassList,
    layout: "/admin",
  },
];

export default dashboardRoutes;
