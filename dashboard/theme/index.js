import { createMuiTheme } from '@material-ui/core';

import palette from './palette';
import typography from './typography';
import shadow from "./shadow";
import overrides from './overrides';

const theme = createMuiTheme({
  palette,
  typography,
  shadow,
  overrides,
  zIndex: {
    appBar: 1200,
    drawer: 1100
  }
});

export default theme;