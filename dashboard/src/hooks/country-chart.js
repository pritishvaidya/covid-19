import { useState } from "react";
import dayJS from "dayjs";
import { darkThemePalette } from "../../theme/palette";

function useCountryChart({ cases = {}, deaths = {}, recovered = {} }) {
  const casesTimeline = Object.keys(cases).map((caseKey) => {
    return { x: new Date(dayJS(caseKey).format()), y: cases[caseKey] };
  });
  const deathsTimeline = Object.keys(deaths).map((deathKey) => {
    return { x: new Date(dayJS(deathKey).format()), y: deaths[deathKey] };
  });
  const recoveredTimeline = Object.keys(recovered).map((recoveredKey) => {
    return {
      x: new Date(dayJS(recoveredKey).format()),
      y: recovered[recoveredKey],
    };
  });

  const casesZoomDomain = {
    x: [
      casesTimeline.length ? casesTimeline[casesTimeline.length - 10].x : 0,
      casesTimeline.length ? casesTimeline[casesTimeline.length - 1].x : 0,
    ],
  };
  const deathsZoomDomain = {
    x: [
      deathsTimeline.length ? deathsTimeline[deathsTimeline.length - 10].x : 0,
      deathsTimeline.length ? deathsTimeline[deathsTimeline.length - 1].x : 0,
    ],
  };
  const recoveriesZoomDomain = {
    x: [
      recoveredTimeline.length
        ? recoveredTimeline[recoveredTimeline.length - 10].x
        : 0,
      recoveredTimeline.length
        ? recoveredTimeline[recoveredTimeline.length - 1].x
        : 0,
    ],
  };

  const [totalCasesZoomDomain, useTotalCasesZoomDomain] = useState(
    casesZoomDomain
  );
  const [totalDeathsZoomDomain, useTotalDeathsZoomDomain] = useState(
    deathsZoomDomain
  );
  const [totalRecoveriesZoomDomain, useTotalRecoveriesZoomDomain] = useState(
    recoveriesZoomDomain
  );

  function handleTotalCases(domain) {
    useTotalCasesZoomDomain(domain);
  }
  function handleTotalDeaths(domain) {
    useTotalDeathsZoomDomain(domain);
  }
  function handleTotalRecoveries(domain) {
    useTotalRecoveriesZoomDomain(domain);
  }

  function getData(zoomedXDomain, data) {
    return data.filter(
      // is d "between" the ends of the visible x-domain?
      (d) => d.x >= zoomedXDomain[0] && d.x <= zoomedXDomain[1]
    );
  }

  const data = [
    {
      label: "Cases",
      chartData: casesTimeline,
      chartZoom: totalCasesZoomDomain,
      chartHandler: handleTotalCases,
      color: darkThemePalette.primary.main,
      gridSize: 8,
    },
    {
      label: "Deaths",
      chartData: deathsTimeline,
      chartZoom: totalDeathsZoomDomain,
      chartHandler: handleTotalDeaths,
      color: darkThemePalette.error.main,
      gridSize: 6,
    },
    {
      label: "Recoveries",
      chartData: recoveredTimeline,
      chartZoom: totalRecoveriesZoomDomain,
      chartHandler: handleTotalRecoveries,
      color: darkThemePalette.success.main,
      gridSize: 6,
    },
  ];

  return {
    data,
    totalCasesZoomDomain,
    totalRecoveriesZoomDomain,
    totalDeathsZoomDomain,
    handleTotalCases,
    handleTotalRecoveries,
    handleTotalDeaths,
    getData,
  };
}

export default useCountryChart;
