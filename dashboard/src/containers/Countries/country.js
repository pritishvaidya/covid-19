import React from "react";
import numeral from "numeral";

import WarningIcon from "@material-ui/icons/Warning";
import ErrorIcon from "@material-ui/icons/Error";
import CheckIcon from "@material-ui/icons/Check";

import Overlay from "../Overlay";
import GridContainer from "../shared/Grid/GridContainer";
import GridItem from "../shared/Grid/GridItem";
import Card from "../shared/Card/Card";
import CardHeader from "../shared/Card/CardHeader";
import CardIcon from "../shared/Card/CardIcon";
import CardFooter from "../shared/Card/CardFooter";

import useCountry from "../../hooks/country";

import useStyles from "./styles";

function Country() {
  const { country, countryRsf, recovered, recoveredRsf } = useCountry();
  const classes = useStyles();

  if (countryRsf || recoveredRsf) {
    return <Overlay />;
  }

  console.log(recovered);

  return (
    <GridContainer justify="space-around">
      <GridItem xs={12} sm={6} md={3}>
        <Card>
          <CardHeader color="warning" stats icon>
            <CardIcon color="warning">
              <WarningIcon />
            </CardIcon>
            <h3 className={classes.cardCategory}>Confirmed</h3>
            <h1 className={classes.cardTitle}>
              {recovered.confirmed && recovered.confirmed > 0
                ? `+${numeral(recovered.confirmed).format("0,0")}`
                : 0}
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
              {recovered.confirmed && recovered.deaths > 0
                ? `+${numeral(recovered.deaths).format("0,0")}`
                : 0}
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
              {recovered.recovered && recovered.recovered > 0
                ? `+${numeral(recovered.recovered).format("0,0")}`
                : 0}
            </h1>
          </CardHeader>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

export default Country;
