import React from "react";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import header from "../../../../theme/header";

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    padding: "0.75rem 1.25rem",
    marginBottom: "0",
    borderBottom: "none",
    background: "transparent",
    zIndex: "3 !important",
    "&$cardHeaderPlain,&$cardHeaderIcon,&$cardHeaderStats,&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader": {
      margin: "0 15px 10px 15px",
      padding: "0",
      position: "relative",
      color: theme.palette.white,
    },
    "&:first-child": {
      borderRadius: "calc(.25rem - 1px) calc(.25rem - 1px) 0 0",
    },
    "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader": {
      "&:not($cardHeaderIcon)": {
        borderRadius: "3px",
        marginTop: "-20px",
        padding: "15px",
      },
    },
    "&$cardHeaderStats svg": {
      fontSize: "36px",
      lineHeight: "56px",
      textAlign: "center",
      width: "36px",
      height: "36px",
      margin: "10px 10px 4px",
    },
    "&$cardHeaderStats i,&$cardHeaderStats .material-icons": {
      fontSize: "36px",
      lineHeight: "56px",
      width: "56px",
      height: "56px",
      textAlign: "center",
      overflow: "unset",
      marginBottom: "1px",
    },
    "&$cardHeaderStats$cardHeaderIcon": {
      textAlign: "right",
    },
  },
  cardHeaderPlain: {
    marginLeft: "0px !important",
    marginRight: "0px !important",
  },
  cardHeaderStats: {
    "& $cardHeaderIcon": {
      textAlign: "right",
    },
    "& h1,& h2,& h3,& h4,& h5,& h6": {
      margin: "0 !important",
    },
  },
  cardHeaderIcon: {
    "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader": {
      background: "transparent",
      boxShadow: "none",
    },
    "& i,& .material-icons": {
      width: "33px",
      height: "33px",
      textAlign: "center",
      lineHeight: "33px",
    },
    "& svg": {
      width: "24px",
      height: "24px",
      textAlign: "center",
      lineHeight: "33px",
      margin: "5px 4px 0px",
    },
  },
  warningCardHeader: {
    color: theme.palette.white,
    "&:not($cardHeaderIcon)": {
      ...header.warningCardHeader,
    },
  },
  successCardHeader: {
    color: theme.palette.white,
    "&:not($cardHeaderIcon)": {
      ...header.successCardHeader,
    },
  },
  dangerCardHeader: {
    color: theme.palette.white,
    "&:not($cardHeaderIcon)": {
      ...header.errorCardHeader,
    },
  },
  infoCardHeader: {
    color: theme.palette.white,
    "&:not($cardHeaderIcon)": {
      ...header.infoCardHeader,
    },
  },
  primaryCardHeader: {
    color: theme.palette.white,
    "&:not($cardHeaderIcon)": {
      ...header.primaryCardHeader,
    },
  },
}));

export default function CardHeader(props) {
  const { className, children, color, plain, stats, icon, ...rest } = props;

  const classes = useStyles();
  const cardHeaderClasses = clsx({
    [classes.cardHeader]: true,
    [classes[color + "CardHeader"]]: color,
    [classes.cardHeaderPlain]: plain,
    [classes.cardHeaderStats]: stats,
    [classes.cardHeaderIcon]: icon,
    [className]: className !== undefined,
  });
  return (
    <div className={cardHeaderClasses} {...rest}>
      {children}
    </div>
  );
}
