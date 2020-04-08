import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import numeral from "numeral";

import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { fetchCountry, fetchTimeline } from "../redux/actions/countries";
import { selectCountry, selectCountryTimeline } from "../selectors/countries";

import { darkThemePalette } from "../../theme/palette";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

function useCountry() {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);

  const dispatch = useDispatch();
  const { query } = useRouter();
  const countryCode = "AU" || query.id[0];

  const { countryStats, countryStatsRsf } = useSelector(
    selectCountry,
    shallowEqual
  );
  const { countryTimeline, countryTimelineRsf } = useSelector(
    selectCountryTimeline,
    shallowEqual
  );

  useEffect(() => {
    dispatch(fetchCountry(countryCode));
    dispatch(fetchTimeline(countryCode));
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

  return {
    countryStats,
    countryStatsRsf,
    countryTimeline,
    countryTimelineRsf,
    order,
    orderBy,
    formatValue,
    handleRequestSort,
    stableSort,
    getComparator,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  };
}

export default useCountry;
