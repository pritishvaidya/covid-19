import React from "react";
import numeral from "numeral";

import InfoIcon from "@material-ui/icons/Info";

import GridItem from "../../shared/Grid/GridItem";
import Card from "../../shared/Card/Card";
import CardHeader from "../../shared/Card/CardHeader";
import CardIcon from "../../shared/Card/CardIcon";
import GridContainer from "../../shared/Grid/GridContainer";

import useStyles from "../styles";

function CasesOverallStatus(props) {
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
    </GridContainer>
  );
}

export default CasesOverallStatus;
