import React from "react";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  cardBody: {
    padding: "0.9375rem 20px",
    flex: "1 1 auto",
    WebkitBoxFlex: "1",
    position: "relative"
  },
  cardBodyPlain: {
    paddingLeft: "5px",
    paddingRight: "5px"
  },
  cardBodyProfile: {
    marginTop: "15px"
  }
});

export default function CardBody(props) {
  const { className, children, plain, profile, ...rest } = props;

  const classes = useStyles();
  const cardBodyClasses = clsx({
    [classes.cardBody]: true,
    [classes.cardBodyPlain]: plain,
    [classes.cardBodyProfile]: profile,
    [className]: className !== undefined
  });
  return (
    <div className={cardBodyClasses} {...rest}>
      {children}
    </div>
  );
}
