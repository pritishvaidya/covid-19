import React from "react";
import numeral from "numeral";

import InfoIcon from "@material-ui/icons/Info";
import WarningIcon from "@material-ui/icons/Warning";
import CheckIcon from "@material-ui/icons/Check";
import ErrorIcon from "@material-ui/icons/Error";

import GridItem from "../../shared/Grid/GridItem";
import Card from "../../shared/Card/Card";
import CardHeader from "../../shared/Card/CardHeader";
import CardIcon from "../../shared/Card/CardIcon";
import GridContainer from "../../shared/Grid/GridContainer";

import useStyles from "../styles";

function OverallStatus(props) {
  const { stats } = props;
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={6} md={3}>
        <Card>
          <CardHeader color="info" stats icon>
            <CardIcon color="info">
              <InfoIcon />
            </CardIcon>
            <h3 className={classes.cardCategory}>Cases</h3>
            <h1 className={classes.cardTitle}>
              {numeral(stats.cases).format("0,0")}
            </h1>
          </CardHeader>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={6} md={3}>
        <Card>
          <CardHeader color="warning" stats icon>
            <CardIcon color="warning">
              <WarningIcon />
            </CardIcon>
            <h3 className={classes.cardCategory}>Active</h3>
            <h1 className={classes.cardTitle}>
              {numeral(stats.active).format("0,0")}
            </h1>
          </CardHeader>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={6} md={3}>
        <Card>
          <CardHeader color="success" stats icon>
            <CardIcon color="success">
              <CheckIcon />
            </CardIcon>
            <h3 className={classes.cardCategory}>Recovered</h3>
            <h1 className={classes.cardTitle}>
              {numeral(stats.recovered).format("0,0")}
            </h1>
          </CardHeader>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={6} md={3}>
        <Card>
          <CardHeader color="danger" stats icon>
            <CardIcon color="danger">
              <ErrorIcon />
            </CardIcon>
            <h3 className={classes.cardCategory}>Deaths</h3>
            <h1 className={classes.cardTitle}>
              {numeral(stats.deaths).format("0,0")}
            </h1>
          </CardHeader>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

export default OverallStatus;
