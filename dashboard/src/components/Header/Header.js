import React from 'react'

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub"
import DarkIcon from "@material-ui/icons/Brightness4"
import LightIcon from "@material-ui/icons/Brightness7"

import useStyles from './styles'
import useHeader from "../../hooks/header";

function Header() {
  const classes = useStyles();
  const { active, toggleTheme, openGithub, openCoffee } = useHeader()
  return (
    <AppBar position="sticky" title="COVID-19"
            className={classes.root}
    >
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="theme"
          onClick={toggleTheme}
        >
          {active ? <DarkIcon /> : <LightIcon/>}
        </IconButton>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="github"
          onClick={openGithub}
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="github"
          onClick={openCoffee}
        >
          <img src="/buy-me-a-coffee.svg" />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header