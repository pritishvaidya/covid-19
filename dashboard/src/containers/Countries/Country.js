import React from "react";

import Overlay from "../Overlay";
import OverallStatus from "./components/overall-status";
import CountryChart from "./components/chart";

import useCountry from "../../hooks/country";

function Country() {
  const {
    countryStats,
    countryStatsRsf,
    countryTimeline,
    countryTimelineRsf,
  } = useCountry();

  if (countryStatsRsf || countryTimelineRsf) {
    return <Overlay />;
  }

  return (
    <div>
      <OverallStatus stats={countryStats} />
      <CountryChart
        cases={countryTimeline.cases}
        deaths={countryTimeline.deaths}
        recovered={countryTimeline.recovered}
      />
    </div>
  );
}

export default Country;
