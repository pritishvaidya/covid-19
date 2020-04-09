import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.main,
  },
  subRoot: {
    justifyContent: "space-between",
  },
  menuButton: {
    padding: "12px",
  },
  flexGrow: {
    flexGrow: 1,
  },
  signOutButton: {
    marginLeft: theme.spacing(1),
  },
}));

export default styles;
