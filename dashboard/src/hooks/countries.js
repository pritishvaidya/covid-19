/* eslint-disable */
import React, { useEffect, useState } from "react";
const R = require("ramda");
import numeral from "numeral";

import { shallowEqual, useDispatch, useSelector } from "react-redux";

import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import { selectCountries } from "../selectors/countries";
import { fetchCountries } from "../redux/actions/countries";
import { darkThemePalette } from "../../theme/palette";

const useCountries = () => {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);

  const dispatch = useDispatch();

  const { countries, countriesRsf } = useSelector(
    selectCountries,
    shallowEqual
  );

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const formatValue = (prop, key) => {
    if (key === 1) {
      return <img src={prop} height={20} width={30} alt={prop} />;
    } else if (key === 4 || key === 6) {
      const isNegative = prop <= 0;
      const color = isNegative
        ? darkThemePalette.success.main
        : key === 4
        ? darkThemePalette.secondary.main
        : darkThemePalette.error.main;
      return (
        <div style={{ display: "flex", alignItems: "center", color }}>
          <span style={{ display: "flex", alignItems: "center" }}>
            {isNegative ? (
              <ArrowDropDownIcon style={{ color }} />
            ) : (
              <ArrowDropUpIcon style={{ color }} />
            )}
          </span>{" "}
          {numeral(prop).format("0,0")}
        </div>
      );
    } else if (key >= 4) {
      return prop && prop > 0 ? `${numeral(prop).format("0,0")}` : 0;
    }
    return prop;
  };

  const flag = R.map((x) => x.countryInfo.flag, countries);
  const country = R.map((x) => x.country, countries);
  const countryCode = R.map((x) => x.countryInfo.iso2, countries);
  const cases = R.map((x) => x.cases, countries);
  const todayCases = R.map((x) => x.todayCases, countries);
  const deaths = R.map((x) => x.deaths, countries);
  const todayDeaths = R.map((x) => x.todayDeaths, countries);
  const recovered = R.map((x) => x.recovered, countries);
  const active = R.map((x) => x.active, countries);
  const critical = R.map((x) => x.critical, countries);
  const casesPerOneMillion = R.map((x) => x.casesPerOneMillion, countries);
  const deathsPerOneMillion = R.map((x) => x.deathsPerOneMillion, countries);

  const rows = [...Array(countries.length)].map((_, index) => [
    index,
    flag[index],
    countryCode[index],
    country[index],
    todayCases[index],
    cases[index],
    todayDeaths[index],
    deaths[index],
    recovered[index],
    active[index],
    critical[index],
    casesPerOneMillion[index],
    deathsPerOneMillion[index],
  ]);

  return {
    countries,
    countriesRsf,
    order,
    orderBy,
    formatValue,
    handleRequestSort,
    stableSort,
    getComparator,
    rows,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  };
};

export default useCountries;
