import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

import useMaps from "../../hooks/maps";

function Maps(props) {
  const { google } = props;

  const { latitude = 34.0479, longitude = 100.6197, locations } = useMaps();

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
      center={{
        lat: latitude,
        lng: longitude,
      }}
      google={google}
      zoom={5}
    >
      {locations.map((location) => (
        <Marker
          id={location.id}
          position={{
            lat: location.coordinates.latitude,
            lng: location.coordinates.longitude,
          }}
          name={location.country}
          title={`Confirmed: ${location.latest.confirmed} \nDeaths: ${location.latest.deaths} \nRecovered: ${location.latest.recovered}`}
        />
      ))}
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCrZ24gY6nFgA8ymT56pDBO1o1WlSTtZ3E",
})(Maps);
