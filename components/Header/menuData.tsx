import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "About",
    newTab: false,
    path: "/#About",
  },
  {
    id: 2.1,
    title: "Project",
    newTab: false,
    path: "/#Companies",
  },

  {
    id: 2.3,
    title: "Team",
    newTab: false,
    path: "/error",
  },

  {
    id: 4,
    title: "Testimonials",
    newTab: false,
    path: "/#Testimonials",
  },

  {
    id: 3,
    title: "Page links",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Atoms digital solutins",
        newTab: false,
        path: "/atom",
      },
      {
        id: 34,
        title: "Atoms Education",
        newTab: false,
        path: "/blog",
      },
      {
        id: 35,
        title: "Atoms hospitality",
        newTab: false,
        path: "/atoms",
      },
      {
        id: 35,
        title: "Way CT",
        newTab: false,
        path: "/atoms",
      },
      {
        id: 35.1,
        title: "Support",
        newTab: false,
        path: "/support",
      },
      {
        id: 36,
        title: "",
        newTab: false,
        path: "/error",
      },
    ],
  },
];

export default menuData;
