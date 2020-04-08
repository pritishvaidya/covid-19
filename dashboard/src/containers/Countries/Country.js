import React from "react";

import Overlay from "../Overlay";
import OverallStatus from "./components/overall-status";

import useCountry from "../../hooks/country";

function Country() {
  const { countryStats, countryStatsRsf, countryTimelineRsf } = useCountry();

  if (countryStatsRsf || countryTimelineRsf) {
    return <Overlay />;
  }

  return (
    <div>
      <OverallStatus stats={countryStats} />
    </div>
  );
}

export default Country;
