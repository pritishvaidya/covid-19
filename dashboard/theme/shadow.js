import palette from './palette';
import { hexToRgb } from "./utils";

const blackColor = '#000'

export default {
  primaryBoxShadow: {
    boxShadow:
      "0 4px 20px 0 rgba(" +
      hexToRgb(blackColor) +
      ",.14), 0 7px 10px -5px rgba(" +
      hexToRgb(palette.primary.main) +
      ",.4)"
  },
  successBoxShadow: {
    boxShadow:
      "0 4px 20px 0 rgba(" +
      hexToRgb(blackColor) +
      ",.14), 0 7px 10px -5px rgba(" +
      hexToRgb(palette.success.main) +
      ",.4)"
  },
  infoBoxShadow: {
    boxShadow:
      "0 4px 20px 0 rgba(" +
      hexToRgb(blackColor) +
      ",.14), 0 7px 10px -5px rgba(" +
      hexToRgb(palette.info.main) +
      ",.4)"
  },
  dangerBoxShadow: {
    boxShadow:
      "0 4px 20px 0 rgba(" +
      hexToRgb(blackColor) +
      ",.14), 0 7px 10px -5px rgba(" +
      hexToRgb(palette.error.main) +
      ",.4)"
  }
};