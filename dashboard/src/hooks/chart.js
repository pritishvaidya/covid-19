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

  const data = [
    {
      label: "New Daily Cases",
      chartData: newDailyCases,
      chartHandler: handleNewDailyCases,
      color: darkThemePalette.primary.main,
    },
    {
      label: "New Daily Deaths",
      chartData: newDailyDeaths,
      chartHandler: handleDailyDeaths,
      color: darkThemePalette.error.main,
    },
    {
      label: "Total Cases",
      chartData: totalCases,
      chartHandler: handleTotalCases,
      color: darkThemePalette.secondary.main,
    },
    {
      label: "Total Recoveries",
      chartData: totalRecoveries,
      chartHandler: handleTotalRecoveries,
      color: darkThemePalette.warning.main,
    },
    {
      label: "Total Deaths",
      chartData: totalDeaths,
      chartHandler: handleTotalDeaths,
      color: darkThemePalette.success.main,
    },
  ];

  return {
    data,
    totalCasesZoomDomain,
    handleTotalCases,
  };
}

export default useChart;
