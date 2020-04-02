import React from "react";

import GridContainer from "../shared/Grid/GridContainer";
import GridItem from "../shared/Grid/GridItem";
import Card from "../shared/Card/Card";
import CardHeader from "../shared/Card/CardHeader";
import CardIcon from "../shared/Card/CardIcon";

import useStyles from "./styles";
import useDashboard from "../../hooks/dashboard";

function Dashboard() {
  const classes = useStyles();
  useDashboard();

  return (
    <GridContainer>
      <GridItem xs={12} sm={6} md={3}>
        <Card>
          <CardHeader color="warning" stats icon>
            <CardIcon color="warning"></CardIcon>
            <p className={classes.cardCategory}>Used Space</p>
            <h3 className={classes.cardTitle}>
              49/50 <small>GB</small>
            </h3>
          </CardHeader>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

export default Dashboard;
