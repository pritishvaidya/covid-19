/* eslint-disable */
import { useEffect } from "react";

import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { fetchAllStats, fetchTimelines } from "../redux/actions/dashboard";
import { selectDashboard } from "../selectors/dashboard";

function useDashboard() {
  const dispatch = useDispatch();

  const { stats, statsRsf, timeline, timelineRsf } = useSelector(
    selectDashboard,
    shallowEqual
  );

  useEffect(() => {
    dispatch(fetchAllStats());
    dispatch(fetchTimelines());
  }, []);

  return {
    stats,
    statsRsf,
    timeline,
    timelineRsf,
  };
}

export default useDashboard;
