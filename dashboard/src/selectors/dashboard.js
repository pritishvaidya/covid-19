import { createSelector } from "reselect";

/**
 * Direct selector to the Dashboard state domain
 */
const selectDashboardDomain = (state) => state.dashboard;

/**
 * Other Selectors
 */
const selectDashboard = createSelector(selectDashboardDomain, (substate) => ({
  stats: substate.stats,
  statsRsf: substate.statsRsf,
  timeline: substate.timeline,
  timelineRsf: substate.timelineRsf,
}));

const selectStats = createSelector(selectDashboardDomain, (substate) => ({
  stats: substate.stats,
  statsRsf: substate.statsRsf,
}));

const selectTimelines = createSelector(selectDashboardDomain, (substate) => ({
  timeline: substate.timeline,
  timelineRsf: substate.timelineRsf,
}));

export { selectDashboard, selectStats, selectTimelines };
export default selectDashboardDomain;
