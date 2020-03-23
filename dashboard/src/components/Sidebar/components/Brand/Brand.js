import React from 'react'
import Switch from "@material-ui/core/Switch";

import useStyles from './styles'

function Brand() {
  const classes = useStyles();
  return (
    <div className={classes.logo}>
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