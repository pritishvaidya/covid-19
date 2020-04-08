import React from "react";

import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import RecoveredIcon from "@material-ui/icons/LocalHospital";
import DeathIcon from "@material-ui/icons/Warning";
import CountriesIcon from "@material-ui/icons/Public";

const items = [
  {
    title: "Dashboard",
    href: "/",
    icon: <DashboardIcon />,
  },
  {
    title: "Cases",
    href: "/cases",
    icon: <PeopleIcon />,
  },
  {
    title: "Recovered",
    href: "/recovered",
    icon: <RecoveredIcon />,
  },
  {
    title: "Deaths",
    href: "/deaths",
    icon: <DeathIcon />,
  },
  /*{
    title: "Daily",
    href: "/daily",
    icon: <DailyIcon />,
  },*/
  {
    title: "Countries",
    href: "/countries",
    icon: <CountriesIcon />,
  },
  /*{
    title: "Map",
    href: "/map",
    icon: <LocationIcon />,
  },*/
];

export { items };
