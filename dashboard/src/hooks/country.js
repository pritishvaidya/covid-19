import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import numeral from "numeral";
import { sortWith, ascend, prop } from "ramda";

import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { fetchCountry, fetchTimeline } from "../redux/actions/countries";
import { selectCountry, selectCountryTimeline } from "../selectors/countries";
import dayJS from "dayjs";

function useCountry() {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState(0);

  const dispatch = useDispatch();
  const { query } = useRouter();
  const countryCode = "AU" || query.id[0];

  const { country, rsf: countryRsf } = useSelector(selectCountry, shallowEqual);
  const { timeline, rsf: timelineRsf } = useSelector(
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

  const formatValue = (prop, key) => {
    if (key === 5) {
      return prop ? numeral(prop).format("0,0") : 0;
    } else if (key >= 6) {
      return prop && prop > 0 ? `+${numeral(prop).format("0,0")}` : 0;
    }
    return prop;
  };

  const formatTimelineValue = (prop, key) => {
    if (key >= 2) {
      return prop && prop > 0 ? `+${numeral(prop).format("0,0")}` : 0;
    }
    return prop;
  };

  const data = [
    [1, "Overall", country.total_cases],
    [2, "Active", country.total_active_cases],
    [3, "Recovered", country.total_recovered],
    [4, "Deaths", country.total_deaths],
    [5, "Serious", country.total_serious_cases],
    [6, "Unresolved", country.unresolved],
    [7, "New Cases Today", country.new_cases_today],
    [8, "New Deaths Today", country.new_deaths_today],
  ];

  const timelineData = Object.keys(timeline).map((key, index) => {
    return [index + 1, dayJS(key).format("MMMM DD, YYYY")].concat(
      Object.keys(timeline[key]).map((nestedKey) => {
        return timeline[key][nestedKey];
      })
    );
  });
  timelineData.pop();
  const newDailyCases = Object.keys(timeline).map((key) => {
    return {
      x: new Date(dayJS(key).format()),
      y: timeline[key].new_daily_cases,
    };
  });
  newDailyCases.pop();
  const sortedTimelineData = sortWith([ascend(prop("x"))])(newDailyCases);

  const newDailyDeaths = Object.keys(timeline).map((key) => {
    return { x: timeline[key].new_daily_deaths, y: dayJS(key).format() };
  });
  newDailyDeaths.pop();
  const totalCases = Object.keys(timeline).map((key) => {
    return { x: timeline[key].total_cases, y: dayJS(key).format() };
  });
  totalCases.pop();
  const totalRecoveries = Object.keys(timeline).map((key) => {
    return { x: timeline[key].total_recoveries, y: dayJS(key).format() };
  });
  totalRecoveries.pop();
  const totalDeaths = Object.keys(timeline).map((key) => {
    return { x: timeline[key].total_deaths, y: dayJS(key).format() };
  });
  totalDeaths.pop();

  return {
    country,
    countryRsf,
    timeline,
    timelineRsf,
    data,
    order,
    orderBy,
    formatValue,
    formatTimelineValue,
    handleRequestSort,
    stableSort,
    getComparator,
    timelineData,
    newDailyCases: sortedTimelineData,
    newDailyDeaths,
    totalCases,
    totalRecoveries,
    totalDeaths,
  };
}

export default useCountry;
