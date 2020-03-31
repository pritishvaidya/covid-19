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

  const { data, totalCasesZoomDomain, handleTotalCases } = useChart(
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
            <VictoryZoomContainer
              zoomDimension="x"
              zoomDomain={totalCasesZoomDomain}
              onZoomDomainChange={handleTotalCases}
            />
          }
          scale={{ x: "time" }}
        >
          {data.map(({ label, chartData, color }) => (
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
                style={{ data: { fill: color } }}
                size={({ active }) => (active ? 2 : 2)}
              />
            </VictoryGroup>
          ))}
        </VictoryChart>
        <VictoryChart
          padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
          height={100}
          scale={{ x: "time" }}
          containerComponent={
            <VictoryBrushContainer
              brushDimension="x"
              brushDomain={totalCasesZoomDomain}
              onBrushDomainChange={handleTotalCases}
            />
          }
        >
          <VictoryAxis
            label="Overall Stats"
            style={{
              axis: { stroke: darkThemePalette.gray },
              tickLabels: {
                fontSize: 7,
                padding: 5,
                fill: darkThemePalette.gray,
              },
              axisLabel: {
                fontSize: 12,
                padding: 30,
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
  );
}

export default Chart;
