import React from "react";

import GridContainer from "../shared/Grid/GridContainer";
import GridItem from "../shared/Grid/GridItem";
import Card from "../shared/Card/Card";
import CardHeader from "../shared/Card/CardHeader";
import CardBody from "../shared/Card/CardBody";
import Table from "../shared/Table/Table";
import Overlay from "../Overlay";

import useStyles from "./styles";

import useCountries from "../../hooks/countries";

function Countries() {
  const classes = useStyles();
  const {
    order,
    orderBy,
    formatValue,
    handleRequestSort,
    stableSort,
    getComparator,
    rsf,
    rows,
  } = useCountries();

  if (rsf) {
    return <Overlay />;
  }

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h2 className={classes.cardTitleWhite}>Countries</h2>
            <p className={classes.cardCategoryWhite}>
              A list of countries with their cases
            </p>
          </CardHeader>
          <CardBody>
            <Table
              sortable
              order={order}
              orderBy={orderBy}
              tableHeaderColor="primary"
              tableHead={[
                "ID",
                "Updated At",
                "Code",
                "Country",
                "Province",
                "Population",
                "Confirmed",
                "Deaths",
                "Recovered",
              ]}
              tableData={stableSort(rows, getComparator(order, orderBy))}
              formatValue={formatValue}
              onRequestSort={handleRequestSort}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

export default Countries;
