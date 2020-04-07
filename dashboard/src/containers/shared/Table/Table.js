import React from "react";

import TableContainer from "@material-ui/core/TableContainer";
import MaterialTable from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import TablePagination from "@material-ui/core/TablePagination";

import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";

// core components
const useStyles = makeStyles((theme) => ({
  warningTableHeader: {
    color: theme.palette.warning.main,
  },
  primaryTableHeader: {
    color: theme.palette.primary.main,
  },
  errorTableHeader: {
    color: theme.palette.error.main,
  },
  successTableHeader: {
    color: theme.palette.success.main,
  },
  infoTableHeader: {
    color: theme.palette.info.main,
  },
  grayTableHeader: {
    color: theme.palette.gray.main,
  },
  table: {
    marginBottom: "0",
    width: "100%",
    maxWidth: "100%",
    backgroundColor: "transparent",
    borderSpacing: "0",
    borderCollapse: "collapse",
  },
  tableHeadCell: {
    color: "inherit",
    "&, &$tableCell": {
      fontSize: "1em",
    },
  },
  tableCell: {
    padding: "12px 8px",
    verticalAlign: "middle",
    fontSize: "0.8125rem",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "300",
    lineHeight: "1.5em",
  },
  tableResponsive: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto",
  },
  tableHeadRow: {
    height: "56px",
    color: "inherit",
    display: "table-row",
    outline: "none",
    verticalAlign: "middle",
  },
  tableBodyRow: {
    height: "48px",
    color: "inherit",
    display: "table-row",
    outline: "none",
    verticalAlign: "middle",
  },
  tableBodyRowPointer: {
    height: "48px",
    color: "inherit",
    display: "table-row",
    outline: "none",
    verticalAlign: "middle",
    cursor: "pointer",
  },
  rootTableSortLabel: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "300",
    lineHeight: "1.5em",
    color: `${theme.palette.primary.main} !important`,
  },
  activeTableSortLabel: {
    color: `${theme.palette.primary.main} !important`,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));

export default function Table(props) {
  const {
    noLink,
    pagination,
    sortable,
    tableHead,
    tableData,
    tableHeaderColor,
    order,
    orderBy,
    onRequestSort,
    formatValue,
    totalRows,
    rowsPerPageOptions,
    rowsPerPage,
    page,
    handleChangePage,
    handleChangeRowsPerPage,
  } = props;

  const classes = useStyles();

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, totalRows - page * rowsPerPage);

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <div className={classes.tableResponsive}>
      <TableContainer>
        <MaterialTable className={classes.table}>
          {tableHead !== undefined ? (
            <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
              <TableRow className={classes.tableHeadRow}>
                {tableHead.map((prop, key) => {
                  return (
                    <TableCell
                      className={
                        classes.tableCell + " " + classes.tableHeadCell
                      }
                      key={key}
                    >
                      {sortable ? (
                        <TableSortLabel
                          classes={{
                            root: classes.rootTableSortLabel,
                            icon: classes.activeTableSortLabel,
                          }}
                          active={orderBy === key}
                          direction={orderBy === key ? order : "asc"}
                          onClick={createSortHandler(key)}
                        >
                          {prop}
                          {orderBy === key ? (
                            <span className={classes.visuallyHidden}>
                              {order === "desc"
                                ? "sorted descending"
                                : "sorted ascending"}
                            </span>
                          ) : null}
                        </TableSortLabel>
                      ) : (
                        prop
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
          ) : null}
          <TableBody>
            {tableData.map((prop, key) => {
              if (noLink) {
                return (
                  <TableRow hover key={key} className={classes.tableBodyRow}>
                    {prop.map((prop, key) => {
                      return (
                        <TableCell className={classes.tableCell} key={key}>
                          {formatValue(prop, key)}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              }
              return (
                <Link
                  href="/countries/[...id]"
                  as={`/countries/${prop[2]}`}
                  key={key}
                >
                  <TableRow
                    hover
                    key={key}
                    className={classes.tableBodyRowPointer}
                  >
                    {prop.map((prop, key) => {
                      return (
                        <TableCell className={classes.tableCell} key={key}>
                          {formatValue(prop, key)}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                </Link>
              );
            })}
            {!!pagination && emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </MaterialTable>
      </TableContainer>
      {!!pagination && (
        <TablePagination
          rowsPerPageOptions={rowsPerPageOptions}
          component="div"
          count={totalRows}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      )}
    </div>
  );
}

Table.defaultProps = {
  tableHeaderColor: "gray",
  rowsPerPageOptions: [10, 25, 50],
};
