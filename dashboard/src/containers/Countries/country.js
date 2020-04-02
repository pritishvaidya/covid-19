import React from "react";

import Container from "@material-ui/core/Container";

import useCountry from "../../hooks/country";

function Country() {
  useCountry();
  return <Container />;
}

export default Country;
