import React from "react";

import useCountry from "../../hooks/country";
import Overlay from "../Overlay";
import GridContainer from "../shared/Grid/GridContainer";
import GridItem from "../shared/Grid/GridItem";
import Card from "../shared/Card/Card";
import CardHeader from "../shared/Card/CardHeader";
import CardIcon from "../shared/Card/CardIcon";
import CardFooter from "../shared/Card/CardFooter";

import useStyles from "./styles";

function Country() {
  const { country, countryRsf, recovered, recoveredRsf } = useCountry();
  const classes = useStyles();

  if (countryRsf || recoveredRsf) {
    return <Overlay />;
  }

  return (
    <GridContainer>
      <GridItem xs={12} sm={6} md={3}>
        <Card>
          <CardHeader color="primary">
            <h2 className={classes.cardTitleWhite}>Confirmed</h2>
          </CardHeader>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

export default Country;
