import React from "react";

import Container from "@material-ui/core/Container";
import { CircularProgress } from "@material-ui/core";

import useStyles from "./styles";

function Loading() {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.root}>
      <CircularProgress />
    </Container>
  );
}

export default Loading;
