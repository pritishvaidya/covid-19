import React from "react";

import Overlay from "../Overlay";
import DeathsOverallStatus from "./components/overall-status";
import DeathsChart from "./components/chart";
import DeathsCountries from "./components/countries";

import useDeaths from "../../hooks/deaths";

function Deaths() {
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
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  } = useDeaths();

  if (statsRsf || timelineRsf || countriesRsf) {
    return <Overlay />;
  }

  return (
    <div>
      <DeathsOverallStatus stats={stats} />
      <DeathsChart deaths={timeline.deaths} />
      <DeathsCountries
        order={order}
        orderBy={orderBy}
        formatValue={formatValue}
        handleRequestSort={handleRequestSort}
        stableSort={stableSort}
        getComparator={getComparator}
        rows={rows}
        page={page}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
}

export default Deaths;
