import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

import { CircularProgress } from "@material-ui/core";

function Maps(props) {
  const { google } = props;
  return <Map google={google} zoom={14} />;
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCrZ24gY6nFgA8ymT56pDBO1o1WlSTtZ3E",
  LoadingContainer: CircularProgress,
})(Maps);
