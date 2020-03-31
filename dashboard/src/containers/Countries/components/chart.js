import React, { useEffect } from "react";
import {
  VictoryChart,
  VictoryZoomContainer,
  VictoryGroup,
  VictoryTooltip,
  VictoryLine,
  VictoryScatter,
  VictoryBrushContainer,
  VictoryAxis,
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

  const { newCasesZoomDomain, handleNewDailyCases } = useChart(
    newDailyCases,
    newDailyDeaths,
    totalCases,
    totalRecoveries,
    totalDeaths
  );
  return (
    <GridContainer
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <GridItem xs={12} sm={12} md={8}>
        <VictoryChart
          theme={{
            axis: {
              style: {
                axis: { stroke: darkThemePalette.primary.main },
                tickLabels: {
                  fontSize: 7,
                  padding: 5,
                  fill: darkThemePalette.primary.main,
                },
                axisLabel: { fontSize: 12, padding: 30 },
                grid: { stroke: darkThemePalette.primary.white },
              },
            },
          }}
          containerComponent={
            <VictoryZoomContainer
              zoomDimension="x"
              zoomDomain={newCasesZoomDomain}
              onZoomDomainChange={handleNewDailyCases}
            />
          }
          scale={{ x: "time" }}
        >
          <VictoryGroup
            labels={({ datum }) => `New Daily Cases: ${datum.y}`}
            labelComponent={
              <VictoryTooltip
                flyoutStyle={{
                  stroke: darkThemePalette.primary.main,
                  fill: "white",
                }}
                style={{ fontSize: 8, fill: darkThemePalette.primary.main }}
              />
            }
            data={newDailyCases}
          >
            <VictoryLine
              style={{
                data: {
                  stroke: darkThemePalette.primary.main,
                  strokeWidth: 1,
                },
              }}
            />
            <VictoryScatter
              style={{ data: { fill: darkThemePalette.primary.main } }}
              size={({ active }) => (active ? 2 : 2)}
            />
          </VictoryGroup>
        </VictoryChart>
        <VictoryChart
          padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
          height={100}
          scale={{ x: "time" }}
          containerComponent={
            <VictoryBrushContainer
              brushDimension="x"
              brushDomain={newCasesZoomDomain}
              onBrushDomainChange={handleNewDailyCases}
            />
          }
        >
          <VictoryAxis
            style={{
              axis: { stroke: darkThemePalette.primary.main },
              tickLabels: {
                fontSize: 7,
                padding: 5,
                fill: darkThemePalette.primary.main,
              },
              axisLabel: { fontSize: 12, padding: 30 },
            }}
            tickFormat={(x) => {
              return dayJS(x).format("MMM DD");
            }}
          />
          <VictoryLine
            style={{
              data: { stroke: darkThemePalette.primary.main, strokeWidth: 1 },
            }}
            data={newDailyCases}
          />
        </VictoryChart>
      </GridItem>
    </GridContainer>
  );
}

export default Chart;
