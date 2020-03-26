import React from "react";
import clsx from "clsx";

import useStyles from "./styles";

function Spinner() {
  const classes = useStyles();
  return (
    <img
      src="/logo.svg"
      alt="logo"
      className={clsx(classes.logo, "MuiCircularProgress-indeterminate")}
    />
  );
}

export default Spinner;
