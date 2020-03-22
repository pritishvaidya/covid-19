import React from 'react'
import RouterLink from 'next/link';

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Brand from "../Sidebar/components/Brand";

import useStyles from './styles'

function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static" title="COVID-19"
            className={classes.root}
    >
      <Toolbar>
        <RouterLink>
          <Brand/>
        </RouterLink>
      </Toolbar>
    </AppBar>
  )
}

export default Header