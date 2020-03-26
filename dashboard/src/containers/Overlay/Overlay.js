import React from "react";

import Spinner from "../Spinner";

import useStyles from "./styles";

function Overlay() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.overlay} />
      <div className={classes.logoRoot}>
        <Spinner />
      </div>
    </div>
  );
}

export default Overlay;
