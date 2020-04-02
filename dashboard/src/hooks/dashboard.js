/* eslint-disable */
import { useEffect } from "react";

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchAllStats } from "../redux/actions/dashboard";

import { selectDashboard } from "../selectors/dashboard";

function useDashboard() {
  const dispatch = useDispatch();

  const { stats, statsRsf } = useSelector(selectDashboard, shallowEqual);

  useEffect(() => {
    dispatch(fetchAllStats());
  }, []);

  return {
    stats,
    statsRsf,
  };
}

export default useDashboard;
