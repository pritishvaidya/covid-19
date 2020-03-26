/* eslint-disable */
import { useEffect } from "react";
const R = require("ramda");
import dayJS from "dayjs";
import numeral from "numeral";

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchLocations } from "../redux/actions/maps";

import { selectLocations } from "../selectors/maps";

const useCountries = () => {
  const dispatch = useDispatch();

  const { locations, rsf } = useSelector(selectLocations, shallowEqual);

  useEffect(() => {
    dispatch(fetchLocations());
  }, []);

  const country = R.pluck("country")(locations);
  const countryCode = R.pluck("country_code")(locations);
  const population = R.map(
    (x) => numeral(x.country_population).format("0,0"),
    locations
  );
  const lastUpdated = R.map(
    (x) => dayJS(x.last_updated).format("MMMM DD, YYYY"),
    locations
  );
  const confirmed = R.map(
    (x) =>
      x.latest.confirmed ? numeral(x.latest.confirmed).format("+0,0") : 0,
    locations
  );
  const deaths = R.map(
    (x) => (x.latest.deaths ? numeral(x.latest.deaths).format("+0,0") : 0),
    locations
  );
  const recovered = R.map(
    (x) =>
      x.latest.recovered ? numeral(x.latest.recovered).format("+0,0") : 0,
    locations
  );

  const rows = [...Array(locations.length)].map((_, index) => [
    country[index],
    countryCode[index],
    lastUpdated[index],
    population[index],
    confirmed[index],
    deaths[index],
    recovered[index],
  ]);
  return { rsf, rows };
};

export default useCountries;
