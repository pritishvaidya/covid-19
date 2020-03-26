import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "calc(100vh - 64px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 5,
    backgroundColor: "#fafafa",
  },
  logoRoot: {
    zIndex: 10,
  },
}));

export default useStyles;
