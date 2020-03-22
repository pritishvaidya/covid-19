import { createSelector } from "reselect";

/**
 * Direct selector to the App state domain
 */
const selectAppDomain = state => state.app;


/**
 * Other Selectors
 */
const selectMode = createSelector(
  selectAppDomain,
  substate => substate.mode
)

export { selectMode }
export default selectAppDomain