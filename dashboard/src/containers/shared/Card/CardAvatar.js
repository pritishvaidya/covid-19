import React from "react";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";

import { hexToRgb } from "../../../../theme/utils";

const useStyles = makeStyles(theme => ({
  cardAvatar: {
    "&$cardAvatarProfile img": {
      width: "100%",
      height: "auto"
    }
  },
  cardAvatarProfile: {
    maxWidth: "130px",
    maxHeight: "130px",
    margin: "-50px auto 0",
    borderRadius: "50%",
    overflow: "hidden",
    padding: "0",
    boxShadow:
      "0 16px 38px -12px rgba(" +
      hexToRgb(theme.palette.black) +
      ", 0.56), 0 4px 25px 0px rgba(" +
      hexToRgb(theme.palette.black) +
      ", 0.12), 0 8px 10px -5px rgba(" +
      hexToRgb(theme.palette.black) +
      ", 0.2)",
    "&$cardAvatarPlain": {
      marginTop: "0"
    }
  },
  cardAvatarPlain: {}
}));

export default function CardAvatar(props) {
  const { children, className, plain, profile, ...rest } = props;

  const classes = useStyles();
  const cardAvatarClasses = clsx({
    [classes.cardAvatar]: true,
    [classes.cardAvatarProfile]: profile,
    [classes.cardAvatarPlain]: plain,
    [className]: className !== undefined
  });
  return (
    <div className={cardAvatarClasses} {...rest}>
      {children}
    </div>
  );
}
