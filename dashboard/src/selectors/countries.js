import { createSelector } from "reselect";
import { omit } from "ramda";
/**
 * Direct selector to the Maps state domain
 */
const selectCountriesDomain = (state) => state.countries;

/**
 * Other Selectors
 */
const selectCountry = createSelector(selectCountriesDomain, (substate) => ({
  country: substate.country,
  rsf: substate.countryRsf,
}));

const selectCountryTimeline = createSelector(
  selectCountriesDomain,
  (substate) => ({
    timeline: omit(["stat"], substate.timeline),
    rsf: substate.timelineRsf,
  })
);

export { selectCountry, selectCountryTimeline };
export default selectCountriesDomain;
