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

import useChart from "../../../hooks/chart";

import { darkThemePalette } from "../../../../theme/palette";

function Chart(props) {
  const {
    newDailyCases,
    newDailyDeaths,
    totalCases,
    totalRecoveries,
    totalDeaths,
  } = props;

  const { data, getData } = useChart(
    newDailyCases,
    newDailyDeaths,
    totalCases,
    totalRecoveries,
    totalDeaths
  );

  const VictoryZoomVoronoiContainer = createContainer("zoom", "voronoi");

  return data.map((subItems, index) => (
    <GridContainer
      container
      direction="row"
      justify="center"
      alignItems="center"
      key={index}
    >
      {subItems.map(
        ({ gridSize, label, chartData, chartZoom, chartHandler, color }) => (
          <GridItem xs={12} sm={12} md={gridSize} key={label}>
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
                  zoomDomain={chartZoom}
                  onZoomDomainChange={chartHandler}
                />
              }
              scale={{ x: "time" }}
            >
              <VictoryGroup
                key={label}
                labels={({ datum }) => `${label}: ${datum.y}`}
                labelComponent={
                  <VictoryTooltip
                    flyoutStyle={{
                      stroke: color,
                      fill: "white",
                    }}
                    style={{ fontSize: 8, fill: darkThemePalette.gray }}
                  />
                }
                data={chartData}
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
            </VictoryChart>
            <VictoryChart
              padding={{ top: 0, left: 50, right: 50, bottom: 50 }}
              height={100}
              scale={{ x: "time" }}
              containerComponent={
                <VictoryBrushContainer
                  brushDimension="x"
                  brushDomain={chartZoom}
                  onBrushDomainChange={chartHandler}
                />
              }
            >
              <VictoryAxis
                label={label}
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
              <VictoryLine
                key={label}
                style={{
                  data: { stroke: color, strokeWidth: 1 },
                }}
                data={chartData}
              />
            </VictoryChart>
          </GridItem>
        )
      )}
    </GridContainer>
  ));
}

export default Chart;
