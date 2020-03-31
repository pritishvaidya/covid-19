import { useState } from "react";

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
  const [newCasesZoomDomain, useNewCasesZoomDomain] = useState(
    newDailyCasesZoomDomain
  );

  function handleNewDailyCases(domain) {
    useNewCasesZoomDomain(domain);
  }

  return {
    newCasesZoomDomain,
    handleNewDailyCases,
  };
}

export default useChart;
