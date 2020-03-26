import React from "react";
import clsx from "clsx";

import useStyles from "./styles";

function Overlay() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.overlay} />
      <div className={classes.logoRoot}>
        <img
          src="/logo.svg"
          alt="logo"
          className={clsx(classes.logo, "MuiCircularProgress-indeterminate")}
        />
      </div>
    </div>
  );
}

export default Overlay;
