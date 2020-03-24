import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  shiftContent: {
    paddingLeft: 260,
  },
  content: {
    height: "calc(100vh - 56px)",
    display: "flex",
    flexFlow: "column",
    justifyContent: "space-between",
    [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
      height: "calc(100vh - 48px)",
    },
    [theme.breakpoints.up("sm")]: {
      height: "calc(100vh - 64px)",
    },
  },
}));

export default useStyles;
