import { colors } from "@material-ui/core";

const white = "#FFFFFF";
const black = "#000000";
const gray = "#a9afbb";

const palette = {
  black,
  white,
  gray,
  icon: colors.blueGrey[600],
  divider: colors.grey[200],
  background: {
    default: "#F4F6F8",
    paper: white,
  },
};

const lightThemePalette = {
  ...palette,
  primary: {
    contrastText: white,
    main: colors.deepPurple["A100"],
  },
  secondary: {
    contrastText: white,
    main: colors.deepPurple["A200"],
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400],
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400],
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400],
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400],
  },
  text: {
    contrastText: white,
    main: colors.deepPurple["A200"],
  },
  sidebar: {
    contrastText: white,
    main: white,
  },
};

const darkThemePalette = {
  ...palette,
  primary: {
    contrastText: white,
    main: colors.deepPurple["A200"],
    main1: colors.deepPurple["A400"],
  },
  secondary: {
    contrastText: white,
    main: colors.orange["A200"],
    main1: colors.orange["A400"],
  },
  success: {
    contrastText: white,
    main: colors.green["A200"],
    main1: colors.green["A400"],
  },
  info: {
    contrastText: white,
    main: colors.blue["A200"],
    main1: colors.blue["A400"],
  },
  warning: {
    contrastText: white,
    main: colors.orange["A200"],
    main1: colors.orange["A400"],
  },
  error: {
    contrastText: white,
    main: colors.red["A200"],
    main1: colors.red["A400"],
  },
  text: {
    contrastText: white,
    main: colors.deepPurple["A200"],
    main1: colors.deepPurple["A400"],
  },
  sidebar: {
    contrastText: white,
    main: "#222a43",
  },
};

export { lightThemePalette, darkThemePalette };
export default palette;
