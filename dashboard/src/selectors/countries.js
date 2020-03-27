import { createSelector } from "reselect";

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

export { selectCountry };
export default selectCountriesDomain;
