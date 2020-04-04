import React from "react";

import Overlay from "../Overlay";
import RecoveredOverallStatus from "./components/overall-status";
import RecoveredChart from "./components/chart";
import RecoveredCountries from "./components/countries";

import useRecovered from "../../hooks/recovered";

function Recovered() {
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
  } = useRecovered();

  if (statsRsf || timelineRsf || countriesRsf) {
    return <Overlay />;
  }

  return (
    <div>
      <RecoveredOverallStatus stats={stats} />
      <RecoveredChart recovered={timeline.recovered} />
      <RecoveredCountries
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

export default Recovered;
