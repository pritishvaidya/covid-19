import React from "react";
import numeral from "numeral";

import CheckIcon from "@material-ui/icons/Check";

import GridItem from "../../shared/Grid/GridItem";
import Card from "../../shared/Card/Card";
import CardHeader from "../../shared/Card/CardHeader";
import CardIcon from "../../shared/Card/CardIcon";
import GridContainer from "../../shared/Grid/GridContainer";

import useStyles from "../styles";

function RecoveredOverallStatus(props) {
  const { stats } = props;
  const classes = useStyles();
  return (
    <GridContainer>
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
    </GridContainer>
  );
}

export default RecoveredOverallStatus;
