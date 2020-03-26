/* eslint-disable */
import { useEffect, useState } from "react";
const R = require("ramda");
import dayJS from "dayjs";
import numeral from "numeral";

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchLocations } from "../redux/actions/maps";

import { selectLocations } from "../selectors/maps";

const useCountries = () => {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState(0);

  const dispatch = useDispatch();

  const { locations, rsf } = useSelector(selectLocations, shallowEqual);

  useEffect(() => {
    dispatch(fetchLocations());
  }, []);

  function deFormat(value, orderBy) {
    if (orderBy >= 3) {
      return numeral(value).value();
    }
    return value;
  }

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const formatValue = (prop, key) => {
    if (key === 5) {
      return prop ? numeral(prop).format("0,0") : 0;
    } else if (key >= 6) {
      return prop && prop > 0 ? `+${numeral(prop).format("0,0")}` : 0;
    }
    return prop;
  };

  const id = R.pluck("id")(locations);
  const province = R.pluck("province")(locations);
  const country = R.pluck("country")(locations);
  const countryCode = R.pluck("country_code")(locations);
  const population = R.map((x) => x.country_population, locations);
  const lastUpdated = R.map(
    (x) => dayJS(x.last_updated).format("MMMM DD, YYYY"),
    locations
  );
  const confirmed = R.map((x) => x.latest.confirmed, locations);
  const deaths = R.map((x) => x.latest.deaths, locations);
  const recovered = R.map((x) => x.latest.recovered, locations);

  const rows = [...Array(locations.length)].map((_, index) => [
    id[index],
    lastUpdated[index],
    countryCode[index],
    country[index],
    province[index],
    population[index],
    confirmed[index],
    deaths[index],
    recovered[index],
  ]);
  return {
    order,
    orderBy,
    formatValue,
    handleRequestSort,
    stableSort,
    getComparator,
    rsf,
    rows,
  };
};

export default useCountries;
