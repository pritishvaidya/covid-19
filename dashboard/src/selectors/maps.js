import { createSelector } from "reselect";

/**
 * Direct selector to the Maps state domain
 */
const selectMapsDomain = (state) => state.maps;

/**
 * Other Selectors
 */
const selectLocations = createSelector(selectMapsDomain, (substate) => ({
  locations: substate.locations,
  rsf: substate.locationsRsf,
}));

export { selectLocations };
export default selectMapsDomain;
