import { createSelector } from "reselect";

/**
 * Direct selector to the App state domain
 */
const selectAppDomain = (state) => state.app;

/**
 * Other Selectors
 */
const selectMode = createSelector(selectAppDomain, (substate) => substate.mode);

const selectMenu = createSelector(selectAppDomain, (substate) => substate.menu);

export { selectMode, selectMenu };
export default selectAppDomain;
