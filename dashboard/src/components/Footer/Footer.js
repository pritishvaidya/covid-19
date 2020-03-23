import React from "react";
import clsx from "clsx";

import { Typography, Link } from "@material-ui/core";

import useStyles from "./styles";

const Footer = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Typography variant="body1">
        &copy;{" "}
        <Link
          component="a"
          href="https://github.com/pritishvaidya"
          target="_blank"
        >
          Pritish Vaidya
        </Link>
        . 2020
      </Typography>
      <Typography variant="caption">
        Created with love for the humanity. By a devloper who loves to work
        remotely.
      </Typography>
    </div>
  );
};

export default Footer;
