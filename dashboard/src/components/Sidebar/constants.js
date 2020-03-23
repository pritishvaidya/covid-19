import React from "react";

import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import ImageIcon from "@material-ui/icons/Image";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SettingsIcon from "@material-ui/icons/Settings";
import LockOpenIcon from "@material-ui/icons/LockOpen";

const items = [
  {
    title: "Dashboard",
    href: "/",
    icon: <DashboardIcon />,
  },
  {
    title: "Users",
    href: "/users",
    icon: <PeopleIcon />,
  },
  {
    title: "Products",
    href: "/products",
    icon: <ShoppingBasketIcon />,
  },
  {
    title: "Authentication",
    href: "/sign-in",
    icon: <LockOpenIcon />,
  },
  {
    title: "Typography",
    href: "/typography",
    icon: <TextFieldsIcon />,
  },
  {
    title: "Icons",
    href: "/icons",
    icon: <ImageIcon />,
  },
  {
    title: "Account",
    href: "/account",
    icon: <AccountBoxIcon />,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: <SettingsIcon />,
  },
];

export { items };
