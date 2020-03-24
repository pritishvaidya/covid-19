import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  root: {},
  item: {
    display: "flex",
    padding: 0,
    marginBottom: "10px",
  },
  button: {
    color: theme.palette.primary.contrastText,
    padding: "15px 16px",
    justifyContent: "flex-start",
    textTransform: "none",
    letterSpacing: 0,
    width: "100%",
    fontWeight: theme.typography.fontWeightLight,
  },
  icon: {
    width: 24,
    height: 24,
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(1),
  },
  title: {
    fontSize: theme.typography.fontSizeSmall,
    padding: "0 8px",
  },
  active: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    fontWeight: theme.typography.fontWeightLight,
    "& $icon": {
      color: theme.palette.secondary.contrastText,
    },
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
}));

export default styles;
