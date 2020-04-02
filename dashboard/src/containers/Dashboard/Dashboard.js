import React from "react";
import numeral from "numeral";

import InfoIcon from "@material-ui/icons/Info";
import WarningIcon from "@material-ui/icons/Warning";
import CheckIcon from "@material-ui/icons/Check";
import ErrorIcon from "@material-ui/icons/Error";

import GridContainer from "../shared/Grid/GridContainer";
import GridItem from "../shared/Grid/GridItem";
import Card from "../shared/Card/Card";
import CardHeader from "../shared/Card/CardHeader";
import CardIcon from "../shared/Card/CardIcon";
import Overlay from "../Overlay";

import useStyles from "./styles";
import useDashboard from "../../hooks/dashboard";
import CardBody from "../shared/Card/CardBody";
import DashboardChart from "./components/chart";

function Dashboard() {
  const classes = useStyles();
  const { stats, statsRsf, timeline, timelineRsf } = useDashboard();

  if (statsRsf || timelineRsf) {
    return <Overlay />;
  }
  return (
    <div>
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
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h2 className={classes.cardTitleWhite}>Timelines</h2>
              <p className={classes.cardCategoryWhite}>
                A timeline for Historical Timelines
              </p>
            </CardHeader>
            <CardBody>
              <DashboardChart
                cases={timeline.cases}
                deaths={timeline.deaths}
                recovered={timeline.recovered}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default Dashboard;
