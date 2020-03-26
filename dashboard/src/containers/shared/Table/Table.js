import React from "react";

import MaterialTable from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";

import { makeStyles } from "@material-ui/core/styles";

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
}));

export default function Table(props) {
  const { tableHead, tableData, tableHeaderColor } = props;

  const classes = useStyles();
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
                    {prop}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableData.map((prop, key) => {
            return (
              <TableRow key={key} className={classes.tableBodyRow}>
                {prop.map((prop, key) => {
                  return (
                    <TableCell className={classes.tableCell} key={key}>
                      {prop}
                    </TableCell>
                  );
                })}
              </TableRow>
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
