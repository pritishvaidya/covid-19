import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

import Loading from "./components/Loading";

import useMaps from "../../hooks/maps";

function Maps(props) {
  const { google } = props;

  const { latitude, longitude } = useMaps();

  return (
    <Map
      zoomControl
      mapTypeControl
      scaleControl
      streetViewControl
      panControl
      rotateControl
      fullscreenControl
      containerStyle={{
        position: "relative",
        width: "100%",
        height: "calc(100vh - 64px)",
      }}
      initialCenter={{
        lat: 34.0479,
        lng: 100.6197,
      }}
      center={{
        lat: latitude,
        lng: longitude,
      }}
      google={google}
      zoom={5}
    />
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_API_KEY,
  LoadingContainer: Loading,
})(Maps);
