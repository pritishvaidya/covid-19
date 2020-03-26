/* eslint-disable */
import { useState, useEffect } from "react";

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchLocations } from "../redux/actions/maps";

import { selectLocations } from "../selectors/maps";

const defaultSettings = {
  enableHighAccuracy: false,
  timeout: Infinity,
  maximumAge: 0,
};

const useMaps = (watch = false, settings = defaultSettings) => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const { locations, rsf } = useSelector(selectLocations, shallowEqual);

  const onChange = ({ coords, timestamp }) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
      accuracy: coords.accuracy,
      timestamp,
    });
  };

  const onError = (error) => {
    setError(error.message);
  };

  useEffect(() => {
    dispatch(fetchLocations());
  }, []);

  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError("Geolocation is not supported");
      return;
    }

    let watcher = null;
    if (watch) {
      watcher = geo.watchPosition(onChange, onError, settings);
    } else {
      geo.getCurrentPosition(onChange, onError, settings);
    }

    return () => watcher && geo.clearWatch(watcher);
  }, [settings]);

  return { ...position, error, rsf, locations };
};

export default useMaps;
