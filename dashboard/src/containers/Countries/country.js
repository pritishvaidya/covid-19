import React from "react";
import numeral from "numeral";

import WarningIcon from "@material-ui/icons/Warning";
import ErrorIcon from "@material-ui/icons/Error";
import CheckIcon from "@material-ui/icons/Check";
import InfoIcon from "@material-ui/icons/Info";

import Overlay from "../Overlay";
import GridContainer from "../shared/Grid/GridContainer";
import GridItem from "../shared/Grid/GridItem";
import Card from "../shared/Card/Card";
import CardHeader from "../shared/Card/CardHeader";
import CardIcon from "../shared/Card/CardIcon";

import useCountry from "../../hooks/country";

import useStyles from "./styles";
import CardBody from "../shared/Card/CardBody";
import Table from "../shared/Table/Table";

function Country() {
  const { country, countryRsf, data, formatValue, recoveredRsf } = useCountry();
  const classes = useStyles();

  if (countryRsf || recoveredRsf) {
    return <Overlay />;
  }

  console.log(country);

  return (
    <div>
      <GridContainer justify="space-around">
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <InfoIcon />
              </CardIcon>
              <h3 className={classes.cardCategory}>Overall Case</h3>
              <h1 className={classes.cardTitle}>
                {country.total_cases && country.total_cases > 0
                  ? `${numeral(country.total_cases).format("0,0")}`
                  : 0}
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
              <h3 className={classes.cardCategory}>Active Case</h3>
              <h1 className={classes.cardTitle}>
                {country.total_active_cases && country.total_active_cases > 0
                  ? `${numeral(country.total_active_cases).format("0,0")}`
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
                {country.total_deaths && country.total_deaths > 0
                  ? `${numeral(country.total_deaths).format("0,0")}`
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
                {country.total_recovered && country.total_recovered > 0
                  ? `${numeral(country.total_recovered).format("0,0")}`
                  : 0}
              </h1>
            </CardHeader>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="primary">
              <h2 className={classes.cardTitleWhite}>Stats</h2>
              <p className={classes.cardCategoryWhite}>
                {`Case Stats for ${country.info.title}`}
              </p>
            </CardHeader>
            <CardBody>
              <Table
                noLink
                tableHeaderColor="primary"
                tableHead={["ID", "Case Type", "Figure"]}
                formatValue={formatValue}
                tableData={data}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default Country;
