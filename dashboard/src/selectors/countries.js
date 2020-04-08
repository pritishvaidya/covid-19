import { createSelector } from "reselect";

/**
 * Direct selector to the Maps state domain
 */
const selectCountriesDomain = (state) => state.countries;

/**
 * Other Selectors
 */
const selectCountries = createSelector(selectCountriesDomain, (substate) => {
  return {
    countries: substate.countries,
    rsf: substate.countriesRsf,
  };
});

const selectCountry = createSelector(selectCountriesDomain, (substate) => ({
  countryStats: substate.countryStats,
  countryStatsRsf: substate.countryStatsRsf,
}));

const selectCountryTimeline = createSelector(
  selectCountriesDomain,
  (substate) => ({
    countryTimeline: substate.countryTimeline,
    countryTimelineRsf: substate.countryTimelineRsf,
  })
);

export { selectCountries, selectCountry, selectCountryTimeline };
export default selectCountriesDomain;
