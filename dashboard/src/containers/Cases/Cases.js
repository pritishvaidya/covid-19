import React from "react";

import Overlay from "../Overlay";
import CasesOverallStatus from "./components/overall-status";
import CasesChart from "./components/chart";
import CasesCountries from "./components/countries";

import useCases from "../../hooks/cases";

function Cases() {
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
  } = useCases();

  if (statsRsf || timelineRsf || countriesRsf) {
    return <Overlay />;
  }

  return (
    <div>
      <CasesOverallStatus stats={stats} />
      <CasesChart cases={timeline.cases} />
      <CasesCountries
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

export default Cases;
