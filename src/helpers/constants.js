import Bag from "../images/bag.png";

export const AccountBannerData = {
  title: "Premium Account",
  image: Bag,
  summary:
    "You have a premium account, granting you access to all the remarkable features offered by ResumeDone. With this privilege, you can indulge in the freedom of downloading an unlimited number of resumes and cover letters in both PDF and Word formats.",
};

export const ProfileFormInputs = [
  {
    title: "First Name",
    type: "text",
    verify: false,
    longText: false,
  },
  {
    title: "Last Name",
    type: "text",
    verify: false,
    longText: false,
  },
  {
    title: "City",
    type: "text",
    verify: false,
    longText: false,
  },
  {
    title: "Postal Code",
    type: "text",
    verify: false,
    longText: false,
  },
  {
    title: "Address",
    type: "text",
    verify: false,
    longText: true,
  },
  {
    title: "Email",
    type: "email",
    verify: true,
    longText: false,
  },
  {
    title: "Phone",
    type: "number",
    verify: false,
    longText: false,
  },
  {
    title: "Password",
    type: "password",
    verify: false,
    longText: false,
  },
];

export const FooterItems = [
  {
    name: "Terms and Conditions",
    path: "",
  },
  {
    name: "Privacy Policy",
    path: "",
  },
  {
    name: "FAQ",
    path: "",
  },
  {
    name: "Contact Us",
    path: "",
  },
];
