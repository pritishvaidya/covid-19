import { useState } from "react";
import { darkThemePalette } from "../../theme/palette";

function useChart(
  newDailyCases,
  newDailyDeaths,
  totalCases,
  totalRecoveries,
  totalDeaths
) {
  const newDailyCasesZoomDomain = {
    x: [
      newDailyCases[newDailyCases.length - 10].x,
      newDailyCases[newDailyCases.length - 1].x,
    ],
  };
  const newDailyDeathsZoomDomain = {
    x: [
      newDailyDeaths[newDailyDeaths.length - 10].x,
      newDailyDeaths[newDailyDeaths.length - 1].x,
    ],
  };
  const newTotalCasesZoomDomain = {
    x: [
      newDailyDeaths[newDailyDeaths.length - 10].x,
      newDailyDeaths[newDailyDeaths.length - 1].x,
    ],
  };
  const newTotalRecoveriesZoomDomain = {
    x: [
      newDailyDeaths[newDailyDeaths.length - 10].x,
      newDailyDeaths[newDailyDeaths.length - 1].x,
    ],
  };
  const newTotalDeathsZoomDomain = {
    x: [
      newDailyDeaths[newDailyDeaths.length - 10].x,
      newDailyDeaths[newDailyDeaths.length - 1].x,
    ],
  };

  const [newCasesZoomDomain, useNewCasesZoomDomain] = useState(
    newDailyCasesZoomDomain
  );
  const [dailyDeathsZoomDomain, useDailyDeathsZoomDomain] = useState(
    newDailyDeathsZoomDomain
  );
  const [totalCasesZoomDomain, useTotalCasesZoomDomain] = useState(
    newTotalCasesZoomDomain
  );
  const [totalRecoveriesZoomDomain, useTotalRecoveriesZoomDomain] = useState(
    newTotalRecoveriesZoomDomain
  );
  const [totalDeathsZoomDomain, useTotalDeathsZoomDomain] = useState(
    newTotalDeathsZoomDomain
  );

  function handleNewDailyCases(domain) {
    useNewCasesZoomDomain(domain);
  }

  function handleDailyDeaths(domain) {
    useDailyDeathsZoomDomain(domain);
  }

  function handleTotalCases(domain) {
    useTotalCasesZoomDomain(domain);
  }

  function handleTotalRecoveries(domain) {
    useTotalRecoveriesZoomDomain(domain);
  }

  function handleTotalDeaths(domain) {
    useTotalDeathsZoomDomain(domain);
  }

  function getData(zoomedXDomain, data) {
    return data.filter(
      // is d "between" the ends of the visible x-domain?
      (d) => d.x >= zoomedXDomain[0] && d.x <= zoomedXDomain[1]
    );
  }

  const data = [
    [
      {
        label: "Total Cases",
        chartData: totalCases,
        chartZoom: totalCasesZoomDomain,
        chartHandler: handleTotalCases,
        color: darkThemePalette.primary.main,
        gridSize: 8,
      },
    ],
    [
      {
        label: "Total Recoveries",
        chartData: totalRecoveries,
        chartZoom: totalRecoveriesZoomDomain,
        chartHandler: handleTotalRecoveries,
        color: darkThemePalette.warning.main,
        gridSize: 6,
      },
      {
        label: "Total Deaths",
        chartData: totalDeaths,
        chartZoom: totalDeathsZoomDomain,
        chartHandler: handleTotalDeaths,
        color: darkThemePalette.success.main,
        gridSize: 6,
      },
    ],
    [
      {
        label: "New Daily Cases",
        chartData: newDailyCases,
        chartZoom: newCasesZoomDomain,
        chartHandler: handleNewDailyCases,
        color: darkThemePalette.secondary.main,
        gridSize: 6,
      },
      {
        label: "New Daily Deaths",
        chartData: newDailyDeaths,
        chartZoom: dailyDeathsZoomDomain,
        chartHandler: handleDailyDeaths,
        color: darkThemePalette.error.main,
        gridSize: 6,
      },
    ],
  ];

  return {
    data,
    getData,
  };
}

export default useChart;
