import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  drawer: {
    width: 260,
    [theme.breakpoints.up("lg")]: {
      height: "100%",
    },
    alignItems: "center",
    backgroundColor: theme.palette.sidebar.main,
    opacity: 0.96,
    boxShadow: theme.shadow.primaryBoxShadow.boxShadow,
    borderRight: 0,
    overflow: "hidden",
  },
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    padding: theme.spacing(2),
    overflow: "auto",
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  nav: {
    marginBottom: theme.spacing(2),
  },
}));

export default styles;
