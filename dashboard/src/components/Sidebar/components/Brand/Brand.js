import React from 'react'
import Switch from "@material-ui/core/Switch";

import useStyles from './styles'

function Brand(props) {
  const { active, toggle } = props
  const classes = useStyles();
  return (
    <div className={classes.logo}>
      <div className={classes.switch}>
        <Switch
          color="secondary"
          checked={active}
          onChange={toggle}
          name="themeChange"
          inputProps={{ 'aria-label': 'theme change' }}
        />
      </div>
      <div>
        <a
          href="."
          className={classes.logoLink}
        >
          <div className={classes.logoImage}>
            <img src='/logo.svg' alt="logo" className={classes.img} />
          </div>
          <div className={classes.logoText}>
            PROJECT COVID-19
          </div>
        </a>
      </div>
    </div>
  )
}

export default Brand