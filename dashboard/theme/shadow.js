import { darkThemePalette } from "./palette";
import { hexToRgb } from "./utils";

const blackColor = "#000";

export default {
  primaryBoxShadow: {
    boxShadow:
      "0 4px 20px 0 rgba(" +
      hexToRgb(blackColor) +
      ",.14), 0 7px 10px -5px rgba(" +
      hexToRgb(darkThemePalette.primary.main) +
      ",.4)",
  },
  successBoxShadow: {
    boxShadow:
      "0 4px 20px 0 rgba(" +
      hexToRgb(blackColor) +
      ",.14), 0 7px 10px -5px rgba(" +
      hexToRgb(darkThemePalette.success.main) +
      ",.4)",
  },
  infoBoxShadow: {
    boxShadow:
      "0 4px 20px 0 rgba(" +
      hexToRgb(blackColor) +
      ",.14), 0 7px 10px -5px rgba(" +
      hexToRgb(darkThemePalette.info.main) +
      ",.4)",
  },
  dangerBoxShadow: {
    boxShadow:
      "0 4px 20px 0 rgba(" +
      hexToRgb(blackColor) +
      ",.14), 0 7px 10px -5px rgba(" +
      hexToRgb(darkThemePalette.error.main) +
      ",.4)",
  },
  warningBoxShadow: {
    boxShadow:
      "0 4px 20px 0 rgba(" +
      hexToRgb(blackColor) +
      ",.14), 0 7px 10px -5px rgba(" +
      hexToRgb(darkThemePalette.warning.main) +
      ",.4)",
  },
};
