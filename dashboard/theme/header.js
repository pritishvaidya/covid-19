import shadow from "./shadow";
import { darkThemePalette } from "./palette";

export default {
  warningCardHeader: {
    background:
      "linear-gradient(60deg, " +
      darkThemePalette.warning.main +
      ", " +
      darkThemePalette.warning.main1 +
      ")",
    ...shadow.warningBoxShadow,
  },
  successCardHeader: {
    background:
      "linear-gradient(60deg, " +
      darkThemePalette.success.main +
      ", " +
      darkThemePalette.success.main1 +
      ")",
    ...shadow.successBoxShadow,
  },
  errorCardHeader: {
    background:
      "linear-gradient(60deg, " +
      darkThemePalette.error.main +
      ", " +
      darkThemePalette.error.main1 +
      ")",
    ...shadow.dangerBoxShadow,
  },
  infoCardHeader: {
    background:
      "linear-gradient(60deg, " +
      darkThemePalette.info.main +
      ", " +
      darkThemePalette.info.main1 +
      ")",
    ...shadow.infoBoxShadow,
  },
  primaryCardHeader: {
    background:
      "linear-gradient(60deg, " +
      darkThemePalette.primary.main +
      ", " +
      darkThemePalette.primary.main1 +
      ")",
    ...shadow.primaryBoxShadow,
  },
};
