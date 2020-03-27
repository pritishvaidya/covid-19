import React from "react";
import clsx from "clsx";

import MaterialTable from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableSortLabel from "@material-ui/core/TableSortLabel";

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
    tableHead,
    tableData,
    tableHeaderColor,
    order,
    orderBy,
    onRequestSort,
    formatValue,
  } = props;

  const classes = useStyles();

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <div className={classes.tableResponsive}>
      <MaterialTable className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow className={classes.tableHeadRow}>
              {tableHead.map((prop, key) => {
                return (
                  <TableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
                    key={key}
                  >
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
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableData.map((prop, key) => {
            return (
              <Link
                href="/countries/[id]"
                as={`/countries/${prop[2]}/${prop[0]}`}
              >
                <TableRow hover key={key} className={classes.tableBodyRow}>
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
        </TableBody>
      </MaterialTable>
    </div>
  );
}

Table.defaultProps = {
  tableHeaderColor: "gray",
};
