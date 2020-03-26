import React from "react";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";

import { hexToRgb } from "../../../../theme/utils";

const useStyles = makeStyles((theme) => ({
  card: {
    border: "0",
    marginBottom: "30px",
    marginTop: "30px",
    borderRadius: "6px",
    color: `rgba(${  hexToRgb(theme.palette.black)  }, 0.87)`,
    background: theme.palette.white,
    width: "100%",
    boxShadow: `0 1px 4px 0 rgba(${  hexToRgb(theme.palette.black)  }, 0.14)`,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem",
  },
  cardPlain: {
    background: "transparent",
    boxShadow: "none",
  },
  cardProfile: {
    marginTop: "30px",
    textAlign: "center",
  },
  cardChart: {
    "& p": {
      marginTop: "0px",
      paddingTop: "0px",
    },
  },
}));

export default function Card(props) {
  const classes = useStyles();
  const { className, children, plain, profile, chart, ...rest } = props;
  const cardClasses = clsx({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardProfile]: profile,
    [classes.cardChart]: chart,
    [className]: className !== undefined,
  });
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
}
