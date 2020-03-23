import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';

const palette = {
  black,
  white,
  icon: colors.blueGrey[600],
  divider: colors.grey[200],
  text: {
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600],
    link: colors.blue[600]
  },
  background: {
    default: '#F4F6F8',
    paper: white
  },
  sidebar: {
    contrastText: white,
    main: '#222a43',
  },
}

const lightThemePalette = {
  ...palette,
  primary: {
    contrastText: white,
    main: colors.deepPurple['A100'],
  },
  secondary: {
    contrastText: white,
    main: colors.deepPurple['A200'],
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400]
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400]
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400]
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  sidebar: {
    contrastText: white,
    main: white
  }
}

const darkThemePalette = {
  ...palette,
  primary: {
    contrastText: white,
    main: colors.deepPurple['A200'],
  },
  secondary: {
    contrastText: white,
    main: colors.orange['500'],
  },
  success: {
    contrastText: white,
    main: colors.green[900],
  },
  info: {
    contrastText: white,
    main: colors.blue[900],
  },
  warning: {
    contrastText: white,
    main: colors.orange[900],
  },
  error: {
    contrastText: white,
    main: colors.red[900],
  },
  sidebar: {
    contrastText: white,
    main: '#222a43'
  }
}

export { lightThemePalette, darkThemePalette }
export default palette