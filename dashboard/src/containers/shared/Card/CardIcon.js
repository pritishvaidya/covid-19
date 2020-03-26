import React from "react";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import header from "../../../../theme/header";

const useStyles = makeStyles((theme) => ({
  cardIcon: {
    "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader": {
      borderRadius: "3px",
      backgroundColor: theme.palette.gray,
      padding: "15px",
      marginTop: "-20px",
      marginRight: "15px",
      float: "left",
    },
  },
  warningCardHeader: header.warningCardHeader,
  successCardHeader: header.successCardHeader,
  errorCardHeader: header.errorCardHeader,
  infoCardHeader: header.infoCardHeader,
  primaryCardHeader: header.primaryCardHeader,
}));

export default function CardIcon(props) {
  const { className, children, color, ...rest } = props;

  const classes = useStyles();
  const cardIconClasses = clsx({
    [classes.cardIcon]: true,
    [classes[color + "CardHeader"]]: color,
    [className]: className !== undefined,
  });
  return (
    <div className={cardIconClasses} {...rest}>
      {children}
    </div>
  );
}
