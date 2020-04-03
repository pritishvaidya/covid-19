import React from "react";

import Overlay from "../Overlay";
import DashboardChart from "./components/chart";
import OverallStatus from "./components/overall-status";
import Countries from "./components/countries";

import useDashboard from "../../hooks/dashboard";

function Dashboard() {
  const {
    stats,
    statsRsf,
    timeline,
    timelineRsf,
    countriesRsf,
    order,
    orderBy,
    formatValue,
    handleRequestSort,
    stableSort,
    getComparator,
    rows,
  } = useDashboard();

  if (statsRsf || timelineRsf || countriesRsf) {
    return <Overlay />;
  }

  return (
    <div>
      <OverallStatus stats={stats} />
      <DashboardChart
        cases={timeline.cases}
        deaths={timeline.deaths}
        recovered={timeline.recovered}
      />
      <Countries
        order={order}
        orderBy={orderBy}
        formatValue={formatValue}
        handleRequestSort={handleRequestSort}
        stableSort={stableSort}
        getComparator={getComparator}
        rows={rows}
      />
    </div>
  );
}

export default Dashboard;
