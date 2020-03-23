import { useMemo } from 'react'
import {createMuiTheme} from '@material-ui/core';

import { shallowEqual, useSelector } from "react-redux";
import { selectMode } from "../src/selectors/app";

import { darkThemePalette, lightThemePalette } from './palette';
import typography from './typography';
import shadow from "./shadow";
import overrides from './overrides';

function setTheme () {
  const mode = useSelector(selectMode, shallowEqual)
  const palette = mode === 'dark' ? darkThemePalette : lightThemePalette
  return useMemo(() => createMuiTheme({
    palette,
    typography,
    shadow,
    overrides,
    zIndex: {
      appBar: 1200,
      drawer: 1100
    }
  }), [mode])
}

export default setTheme;


