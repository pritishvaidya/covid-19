import React from "react";
import {
  VictoryChart,
  VictoryGroup,
  VictoryTooltip,
  VictoryLine,
  VictoryScatter,
  VictoryBrushContainer,
  VictoryAxis,
  createContainer,
} from "victory";
import dayJS from "dayjs";

import GridContainer from "../../shared/Grid/GridContainer";
import GridItem from "../../shared/Grid/GridItem";
import Card from "../../shared/Card/Card";
import CardHeader from "../../shared/Card/CardHeader";
import CardBody from "../../shared/Card/CardBody";

import { darkThemePalette } from "../../../../theme/palette";
import useDashboardChart from "../../../hooks/dashboard-chart";

import useStyles from "../styles";

function RecoveredChart(props) {
  const { recovered } = props;
  const classes = useStyles();

  const {
    data,
    totalRecoveredZoomDomain,
    handleTotalRecovered,
    getData,
  } = useDashboardChart({ recovered });

  const VictoryZoomVoronoiContainer = createContainer("zoom", "voronoi");

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h2 className={classes.cardTitleWhite}>Recovered</h2>
            <p className={classes.cardCategoryWhite}>
              A historical data timeline for Recovered Cases
            </p>
          </CardHeader>
          <CardBody>
            <GridContainer
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <GridItem xs={12} sm={12} md={9}>
                <VictoryChart
                  theme={{
                    axis: {
                      style: {
                        axis: { stroke: darkThemePalette.gray },
                        tickLabels: {
                          fontSize: 7,
                          padding: 5,
                          fill: darkThemePalette.gray,
                        },
                        axisLabel: { fontSize: 12, padding: 30 },
                        grid: { stroke: darkThemePalette.primary.white },
                      },
                    },
                  }}
                  containerComponent={
                    <VictoryZoomVoronoiContainer
                      zoomDimension="x"
                      zoomDomain={totalRecoveredZoomDomain}
                      onZoomDomainChange={handleTotalRecovered}
                    />
                  }
                  scale={{ x: "time" }}
                >
                  {data.map(({ label, chartData, chartZoom, color }) => (
                    <VictoryGroup
                      key={label}
                      labels={({ datum }) => `${label}: ${datum.y}`}
                      data={chartData}
                      labelComponent={
                        <VictoryTooltip
                          flyoutStyle={{
                            stroke: color,
                            fill: "white",
                          }}
                          style={{ fontSize: 8, fill: darkThemePalette.gray }}
                        />
                      }
                    >
                      <VictoryLine
                        style={{
                          data: {
                            stroke: color,
                            strokeWidth: 1,
                          },
                        }}
                      />
                      <VictoryScatter
                        data={getData(chartZoom, chartData)}
                        style={{ data: { fill: color } }}
                        size={({ active }) => (active ? 2 : 2)}
                      />
                    </VictoryGroup>
                  ))}
                </VictoryChart>
                <VictoryChart
                  padding={{ top: 0, left: 50, right: 50, bottom: 50 }}
                  height={100}
                  scale={{ x: "time" }}
                  containerComponent={
                    <VictoryBrushContainer
                      brushDimension="x"
                      brushDomain={totalRecoveredZoomDomain}
                      onBrushDomainChange={handleTotalRecovered}
                    />
                  }
                >
                  <VictoryAxis
                    style={{
                      axis: { stroke: darkThemePalette.gray },
                      tickLabels: {
                        fontSize: 7,
                        padding: 5,
                        fill: darkThemePalette.gray,
                      },
                      axisLabel: {
                        fontSize: 12,
                        fill: darkThemePalette.gray,
                      },
                    }}
                    tickFormat={(x) => {
                      return dayJS(x).format("MMM DD");
                    }}
                  />
                  {data.map(({ label, chartData, color }) => (
                    <VictoryLine
                      key={label}
                      style={{
                        data: { stroke: color, strokeWidth: 1 },
                      }}
                      data={chartData}
                    />
                  ))}
                </VictoryChart>
              </GridItem>
            </GridContainer>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

export default RecoveredChart;
